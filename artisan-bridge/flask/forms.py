# To contain form classes for data collection and validation
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired


class LoginForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), Length(min=4,max=15)])
    password = PasswordField('poassword', validators=[DataRequired(), Length(min=8, max= 80)])
    submit = SubmitField('Sign Up')
    remember = BooleanField('remember me')

class signUpForm(FlaskForm):
    username = StringField('Username',
                        validators=[DataRequired(), Length(min=4, max=20)])#minimum username length should be 4
    email = StringField('Email', validators= [DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])# remember to hash password    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    confirm_password = PasswordField('confirm password',
                            validators=[DataRequired(),EqualTo('password')])
    submit = SubmitField('Sign Up')