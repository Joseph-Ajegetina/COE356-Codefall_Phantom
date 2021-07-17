from flask import Flask, request
from flask.helpers import flash
from forms import LoginForm, signUpForm
from wtforms_json import from_json


app = Flask(__name__)
# Key to be hashed and hidden in directory
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'


@app.route('/')
@app.route('/home')
@app.route('/index')
def home_page():
    # Database query for services and most rated artisans
    return "<h1>Home Page</h1>"


# Login form, validation and session to be added
@app.route('/login', methods=['POST','GET'] )
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # delete this line later---------------------------------------------------------------
        flash(f'Account created for {form.username.data}.')
        #---------------------------------------------------------------------------------------
 
    return "<h1>login page</h1>"


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