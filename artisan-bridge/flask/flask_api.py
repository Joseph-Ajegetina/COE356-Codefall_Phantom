from flask import Flask, request
from flask.helpers import flash
from forms import LoginForm, signUpForm
import json
import requests
from wtforms_json import from_json
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user


app = Flask(__name__)
# Key to be hashed and hidden in directory
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'

bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

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
        login_details = request.get_json(force=True)
        login_details = json.loads(login_details)
        form = LoginForm.from_json(login_details)
        if form.validate():
            
            #login_user(user, rememger=form.remember.data)

            #if user and bcrypt.check_password_hash(user.password,form.password.data)
            login_details = json.dumps(login_details)
            return login_details # this is where to send the details to the database
        return form.errors # if there are errors return json file back to react frontend
       
 
   


@app.route('/register', methods=['GET','POST'] )
def register():

    if request.method == 'POST':
        request_react = request.get_json(force=True)
        form = signUpForm.from_json(request_react)  

        if form.validate():
            #-------------------------------------------
            # Database commiting and further validation 
            #-------------------------------------------
            return { "Registration": f"Account created for {form.username.data}"}
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




# if __name__ == "__main__":
#     app.run(debug=True)