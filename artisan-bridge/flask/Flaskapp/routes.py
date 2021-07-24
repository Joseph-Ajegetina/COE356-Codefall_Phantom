from flask import request
from Flaskapp.forms import LoginForm, signUpForm
import json
from Flaskapp import connection, artisans, services, customers, records, db
from wtforms_json import from_json
from Flaskapp import app, bcrypt, db



@app.route('/')
@app.route('/home')
@app.route('/index')
def home_page():
    # Database query for services and most rated artisans
    return "<h1>Home Page</h1>"


# Login form, validation and session to be added
@app.route('/login', methods=['POST','GET'] )
def login():
    if request.method == 'POST': 

        login_details = request.get_json()
        # login_details = json.loads(login_details)
        form = LoginForm.from_json(login_details)

        if form.validate():

            username = connection.execute(db.select([customers.columns.customer_username]).where(customers.columns.customer_username == form.customer_username.data)).fetchall()
            password = connection.execute(db.select([customers.columns.password]).where(customers.columns.customer_username == form.customer_username.data)).fetchall()

            # ----------------------------------------
            # Query can be changed to simplier format
            # 
            # ----------------------------------------
            
            if username and bcrypt.check_password_hash(password[0][0],form.password.data):
                # pass #log the user in
                return {"Info":"logged in"}
             #login_user(user, rememger=form.remember.data)
            else:
                return {"Info":'invalid credentials'}

        return form.errors # if there are errors return json file back to react frontend
       
 
   


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
    return {"Page" : "Sign Up" }

    


@app.route('/about')
def about_page():
    return "<h1>About Page</h1>"

@app.route('/report')
def report_page():
    return "<h1>Report Page</h1>"

@app.route('/services')
def Services_page():
    return "<h1>Services Page</h1>"

