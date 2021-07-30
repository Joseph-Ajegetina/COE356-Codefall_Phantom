from flask import request, session
from flask_login.utils import login_required, login_user, logout_user
from Flaskapp.forms import LoginForm, signUpForm, adminForm, artisanForm
import json
from Flaskapp import connection, artisans, services, customers, records, db, admin, popular_services,top_rated_artisans
from wtforms_json import from_json
from Flaskapp import app, bcrypt, db
from Flaskapp.decos import admin_login_required, login_requireds



# def login_requireds(*args, **kwargs):

#     def wrapper(original):
#         return original()
                
#     if kwargs == True:
#         return wrapper
#     else:
#         return {"Info":"Login required"}



# State = None



# admin 🙄🙄😶
@app.before_request
def before_request():
    

    if 'admin' in session:
        app.config['State_Admin'] = True
        # print(State)
    elif 'username' in session:
        # print(State)
        app.config['State'] = True

    else:
        app.config['State'] = None
        

@app.route('/dashboard', methods=['GET'])
@login_requireds
def dashboard():

    return {"info":f'the dashboard{session}'}





# Login form, validation and session to be added
# ----------------------------------------------------------------------------------------------------

@app.route('/login', methods=['POST','GET'] )
def login():

    # session['loggedin'] = True
    # session['username'] = input("Name")
    # return {"info":"LoggedIn"}

    if request.method == 'POST': 

        login_details = request.get_json(force=True)
        # login_details = json.loads(login_details)
        form = LoginForm.from_json(login_details)

        # Requires reformating
        if form.validate():

            
            user = connection.execute(db.select([customers.columns.customer_username]).where(customers.columns.customer_username == form.username.data)).fetchall()
            admin_name = connection.execute(db.select([admin.columns.admin_username]).where(admin.columns.admin_username == form.username.data)).fetchall()

            customer_id = connection.execute(db.select([customers.columns.customer_id]).where(customers.columns.customer_username == form.username.data)).fetchall()


            if user:
                password = connection.execute(db.select([customers.columns.password]).where(customers.columns.customer_username == form.username.data)).fetchall()

                if bcrypt.check_password_hash(password[0][0],form.password.data):
                #log the user in

                # session['loggedin'] = True
                # session['id'] = customer_id
                # session['username'] = 'username'

                    return {"Info":"logged in, Customer"}# return to the dashboard of the user
             
                else:
                    return {"Info":'invalid credentials'}


            elif admin_name:
                password = connection.execute(db.select([admin.columns.password]).where(admin.columns.admin_username == form.username.data)).fetchall()

                if bcrypt.check_password_hash(password[0][0],form.password.data):
                #log the user in

                # session['loggedin'] = True
                # session['id'] = customer_id
                # session['username'] = 'username'
                # session['admin'] = True

                    return {"Info":"logged in, Administrator"}# return to the dashboard of the user
             
                else:
                    return {"Info":'invalid credentials'}

            else:
                return {"Info":'invalid credentials'}

        # will be removed on further discussion
        return form.errors # if there are errors return json file back to react frontend

    else:
        return {"Info": "GET to login"}











@app.route('/logout', methods=['GET','POST'])
@login_requireds
def logout():
    
    # session.pop('loggedin', None)
    # # id
    # session.pop('username', None)

    return {"info":'back to login route'}  



@app.route('/register', methods=['GET','POST'] )
def register():

    if request.method == 'POST':

        request_react = request.get_json(force=True)
        # hashing password before converting json to form
        password = bcrypt.generate_password_hash(str(request_react['password'])).decode('utf-8')
        request_react['password'] = password
        
        form = signUpForm.from_json(request_react)  


        if form.validate():
            #-------------------------------------------
            # Database commiting and further validation 
            connection.execute(db.insert(customers).values([dict(request_react)]))
            #-------------------------------------------
            return { "Registration":"Registered"}
        else:
            return {"Errors" : form.errors } 
        
    # to be changed
    return {"Page" : "Sign Up" }# return to dashboard route



@app.route('/register/admin', methods=['GET','POST'] )
def Admin_register():

    if request.method == 'POST':

        request_react = request.get_json(force=True)
        # hashing password before converting json to form
        password = bcrypt.generate_password_hash(str(request_react['password'])).decode('utf-8')
        request_react['password'] = password
        
        form = adminForm.from_json(request_react)  


        if form.validate():
            #-------------------------------------------
            # Database commiting and further validation 
            connection.execute(db.insert(admin).values([dict(request_react)]))
            #-------------------------------------------
            return { "Registration":"Registered, Administrator"}
        else:
            return {"Errors" : form.errors } 
        
    # to be changed
    return {"Page" : "Sign Up" }# return to dashboard route



# -----------------------------------------

@app.route('/admin/artisan_table', methods=['GET'])
def artisan_table():
    return {"Data" : str(connection.execute(db.select([artisans])).fetchall())}


# to be tested -----------------------------
@app.route('/admin/<string:table>/edit/<string:id>', methods=['POST', 'DELETE'])
# @login_required
def edit_table(id, table):

    reference = {"artisans": [artisans , artisans.columns.artisan_id], 
                    "customers":[customers, customers.columns.customer_id]}
    
    if request.method == 'POST':

        artisan = request.get_json(force=True)
        form = artisanForm.from_json(artisan)  

        

        if form.validate():
            #-------------------------------------------
            # Database commiting and further validation 
            connection.execute(db.insert(reference[table]).values([dict(artisan)]))
            #-------------------------------------------
            return { "Registration_from_admin": f"Account created for {form.first_name.data}"}
        else:
            return {"Errors" : form.errors } 

    elif request.method == 'DELETE':
        
        
        connection.execute(db.delete(reference[table][0]).where(reference[table][1] == int(id)))
        return {"Info": "Done"}


@app.route('/top_rated_artisans')
def popular_artisans():
    #select firstname, lastname, rating, coreservice from artisans table order by desc ratings limit 3
    #select * from top rated artisans
    return {"Result" : str(connection.execute(db.select([top_rated_artisans])).fetchall())}
    

@app.route('/popular_services')
def popularServices():
    return {"Result" : str(connection.execute(db.select([popular_services])).fetchall())}
    

@app.route('/report/<int:customer_id>')
@login_required
def report(customer_id):
    return(connection.execute(db.select([records.columns.record_id,
     records.columns.artisan_id, 
     records.columns.service_type,
     records.columns.date]).where(records.columns.customer_id == customer_id).order_by(db.desc(records.columns.date))))
    #query to return last 10 transactions of that user
    


# to be changed
@app.route('/admin/report')
# @login_required
def reports():
    values = connection.execute(db.select([records])).fetchall()
    
    

    return {"Result" : str(values)}


@app.route('/services')
def services():
    return {"Result" : str(connection.execute(db.select([popular_services])).fetchall())}
   

 
