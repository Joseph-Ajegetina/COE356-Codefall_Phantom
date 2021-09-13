# To contain form classes for data collection and validation
from wtforms import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired, ValidationError
# from Flaskapp import artisans, services, customers, records, db


class LoginForm(Form):
    customer_username = StringField(
        'customer_username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])


class signUpForm(Form):

    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email()])
    contact = StringField('contact', validators=[DataRequired()])
    customer_username = StringField('username', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    password = PasswordField('password', validators=[
                             DataRequired(), Length(min=8, max=80)])


    def __repr__(self):
        return f"{self.username.data, self.email.data, self.password.data}"


class adminForm(Form):

    username = StringField('username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])
