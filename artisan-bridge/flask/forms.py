# To contain form classes for data collection and validation
from flask_wtf import FlaskForm
from wtforms import StringField, passwordField, BooleanField
from wtforms.validators import InputRequired, Email, Length



class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(), Length(min=4,max=15)])
    password = passwordField('password', validators=[InputRequired(), Length(min=8, max= 80)])
    remember = BooleanField('remember me')