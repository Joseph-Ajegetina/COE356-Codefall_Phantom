from flask import Flask
from flask.helpers import flash
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired

 #from forms import LoginForm 

app = Flask(__name__)
# Key to be hashed and hidden in directory
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'

class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(), Length(min=4,max=15)])
    password = PasswordField('poassword', validators=[InputRequired(), Length(min=8, max= 80)])
    remember = BooleanField('remember me')

class signUpForm(FlaskForm):
    username = StringField('Username',
                        validators=[DataRequired(), Length(min=4, max=20)])#minimum username length should be 4
    email = StringField('Email', validators= [DataRequired(), Email])
    password = PasswordField('Password', validators=[DataRequired()])# remember to hash password    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    confirm_password = PasswordField('confirm password',
                            validators=[DataRequired(),EqualTo('password')])
    submit = SubmitField('Sign Up')


@app.route('/')
@app.route('/home')
@app.route('/index')
def home_page():
    return "<h1>Home Page</h1>"

# Login form, validation and session to be added
@app.route('/login', methods=['POST','GET'] )
def login():
    form = LoginForm()
    return "<h1>login page</h1>"

@app.route('/register', methods=['GET','POST'] )
def register():
    form = signUpForm()
    if form.validate_on_submit():
        # delete this line later---------------------------------------------------------------
        flash(f'Account created for {form.username.data}.')
        #---------------------------------------------------------------------------------------
    return "<h1>signUp page page</h1>"

@app.route('/about')
def about_page():
    return "<h1>About Page</h1>"

@app.route('/report')
def report_page():
    return "<h1>Report Page</h1>"

@app.route('/services')
def Services_page():
    return "<h1>Services Page</h1>"




if __name__ == "__main__":
    app.run(debug=True)