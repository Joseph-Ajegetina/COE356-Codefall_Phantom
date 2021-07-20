# To contain form classes for data collection and validation
from wtforms import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired, ValidationError
from Flaskapp import connection, artisans, services, customers, records, db



class LoginForm(Form):
    customer_username = StringField('username', validators=[DataRequired(), Length(min=4,max=15)])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max= 200)])
    # submit = SubmitField('Sign Up')
    # remember = BooleanField('remember me')



class signUpForm(Form):
    
    first_name = StringField('first_name', validators=[DataRequired(), Length(min=4, max=20)])
    last_name = StringField('last_name', validators=[DataRequired(), Length(min=4, max=20)])
    email = StringField('email', validators= [DataRequired(), Email()])
    phone = StringField('phone', validators= [DataRequired()])
    customer_username = StringField('customer_username', validators= [DataRequired()])
    city = StringField('city', validators= [DataRequired()])
    password = PasswordField('poassword', validators=[DataRequired(), Length(min=8, max= 80)])

    # When password field is added
    # password = PasswordField('Password', validators=[DataRequired()])# remember to hash password    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    # confirm_password = PasswordField('confirm password',
    #                         validators=[DataRequired(),EqualTo('password')])
    

    # def validate_username(self, Username):
    #     # Perform query form database
    #     user = db.select([customers.columns.username]).where(customers.columns.username == Username)
        
    #     # check if user exists
    #     if user:
    #         raise ValidationError('Username already taken')
        

    def validate_email(self, email):
        # Perform query form database
        email = connection.execute(db.select([customers.columns.email]).where(customers.columns.email == email.data)).fetchall()

        # checks if email is already taken
        if email:
            raise ValidationError('Email has already been used')
        

    def __repr__(self):
        return f"{self.username.data, self.email.data, self.password.data}"