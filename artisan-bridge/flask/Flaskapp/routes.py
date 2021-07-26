from flask import request, session, g
from flask_login.utils import login_required, login_user, logout_user
from Flaskapp.forms import LoginForm, signUpForm, adminForm, artisanForm
import json
from Flaskapp import connection, artisans, services, customers, records, db, admin
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




@app.before_request
def before_request():
    
    # print(State)
    if 'username' in session:
        
        # print(State)
        app.config['State'] = True
        # State = True
        # print(State)
    else:
        app.config['State'] = None
        

@app.route('/dashboard', methods=['GET'])
@login_requireds
def dashboard():

    return {"info":'the dashboard'}



# Login form, validation and session to be added
@app.route('/login', methods=['POST','GET'] )
def login():

    session['loggedin'] = True
    session['username'] = 'username'
    return {"info":"LoggedIn"}

    # if request.method == 'POST': 
    #     login_details = request.get_json(force=True)
    #     # login_details = json.loads(login_details)
    #     form = LoginForm.from_json(login_details)

    #     # Requires reformating
    #     if form.validate():

    #         email = connection.execute(db.select([customers.columns.email]).where(customers.columns.email == form.email.data)).fetchall()
    #         username = connection.execute(db.select([customers.columns.customer_username]).where(customers.columns.customer_username == form.customer_username.data)).fetchall()
    #         password = connection.execute(db.select([customers.columns.password]).where(customers.columns.customer_username == form.customer_username.data)).fetchall()
    #         customer_id = connection.execute(db.select([customers.columns.customer_id]).where(customers.columns.customer_username == form.customer_username.data)).fetchall()


    #         if (username or email) and bcrypt.check_password_hash(password[0][0],form.password.data):
    #             #log the user in

    #             session['loggedin'] = True
    #             session['id'] = customer_id
    #             session['username'] = 'username'

    #             return {"Info":"logged in"}# return to the dashboard of the user
             
    #         else:
    #             return {"Info":'invalid credentials'}

    #     return form.errors # if there are errors return json file back to react frontend

    # else:
    #     return {"Info": "GET to login"}
       
 

@app.route('/logout', methods=['GET','POST'])
@login_requireds
def logout():
    
    session.clear()

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
            return { "Registration": f"Account created for {form.first_name.data}"}
        else:
            return {"Errors" : form.errors } 
        
    # to be changed
    return {"Page" : "Sign Up" }# return to dashboard route


# -----------------------------------------


@app.route('/admin', methods=['POST','GET'])
def administrator():
    if request.method == 'POST': 

        admin_details = request.get_json(force=True)
        form = adminForm.from_json(admin_details)

        if form.validate():

            admin_email = connection.execute(db.select([admin.columns.email]).where(admin.columns.email == form.email.data)).fetchall()
            password = connection.execute(db.select([admin.columns.password]).where(admin.columns.email == form.email.data)).fetchall()
            
            if admin_email and bcrypt.check_password_hash(password[0][0],form.password.data): 
                
                return {"Info":"logged in, Administrator"}
                
            else:
                return {"Info":'invalid credentials for admin'}

        return form.errors    # if there are errors return json file back to react frontend



@app.route('/admin/aritsan_table', methods=['GET'])
def artisan_table():
    return connection.execute(db.select([artisans]))

# to be tested -----------------------------
@app.route('/admin/artisan/edit/<string:id>', methods=['POST', 'DELETE'])
@login_required
def edit_artisan(id):

    if request.method == 'POST':

        artisan = request.get_json(force=True)
        form = artisanForm.from_json(artisan)  

        if form.validate():
            #-------------------------------------------
            # Database commiting and further validation 
            connection.execute(db.insert(artisans).values([dict(artisan)]))
            #-------------------------------------------
            return { "Registration": f"Account created for {form.first_name.data}"}
        else:
            return {"Errors" : form.errors } 

    elif request.method == 'DELETE':

        connection.execute(db.delete(artisans).where(artisans.columns.artisan_id == id))

    
    return {"Info: Done"}


app.route('/popular_artisans')
def popular_artisans():
    #select firstname, lastname, rating, coreservice from artisans table order by desc ratings limit 3
    #select * from top rated artisans
    #db.select([top_rated_artisans])
    pass

app.route('/popular_services')
def popularServices():
    #select * from popular_services
    #db.select([populars_ervices])
    pass

 