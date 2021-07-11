from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, passwordField, BooleanField
from wtforms.validators import InputRequired, Email, Length


app = Flask(__name__)
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'

class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(), Length(min=4,max=15)])
    password = passwordField('poassword', validators=[InputRequired(), Length(min=8, max= 80)])
    remember = BooleanField('remember me')


#home route
@app.route('/')
@app.route('/home')
@app.route('/index')
def home_page():
    return "<h1>Home Page</h1>"

@app.route('/login' )
def login():
    form = LoginForm()
    return "<h1>login page</h1>"

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