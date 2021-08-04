# To contain form classes for data collection and validation
from wtforms import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired, ValidationError
from Flaskapp import connection, artisans, services, customers,records, db



class LoginForm(Form):
    customer_username = StringField('customer_username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])
    


class signUpForm(Form):
    
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('first_name', validators=[DataRequired()])
    email = StringField('email', validators= [DataRequired(), Email()])
    phone = StringField('phone', validators= [DataRequired()])
    customer_username = StringField('username', validators= [DataRequired()])
    city = StringField('city', validators= [DataRequired()])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max= 80)])

    # confirm_password = PasswordField('confirm password', validators=[DataRequired(),EqualTo('password')])
    

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

    def validate_username(self, Username):
        # Perform query form database
        username = connection.execute(db.select([artisans.columns.customer_username]).where(customers.columns.customer_username == Username.data)).fetchall()
        
        # check if user exists
        if username:
            raise ValidationError('Username already taken')
        

    def __repr__(self):
        return f"{self.username.data, self.email.data, self.password.data}"



class adminForm(Form):

    username = StringField('username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])

    # # Same as login route
    # def validate_email(self, email):
    #     email = connection.execute(db.select([admin.columns.email]).where(admin.columns.email == email.data)).fetchall()

    #     if email:
    #         raise ValidationError('Email has already been used')


class artisanForm(Form):

    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    contact = StringField('phone', validators= [DataRequired()])
    service_id = StringField('service_id', validators= [DataRequired()])
    artisan_username = StringField('customer_username', validators= [DataRequired()])
    address = StringField('city', validators= [DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])
    rating = StringField('rating', validators= [DataRequired()])
    


    def validate_email(self, email, artisan_username):
        # Perform query form database
        email = connection.execute(db.select([artisans.columns.email]).where(artisans.columns.email == email.data)).fetchall()

        # checks if email is already taken
        if email:
            raise ValidationError('Email has already been used')

    # some fields will be changed or removed

    def validate_username(self, Username):
        # Perform query form database
        username = connection.execute(db.select([artisans.columns.artisan_username]).where(artisans.columns.artisan_username == Username.data)).fetchall()
        
        # check if user exists
        if username:
            raise ValidationError('Username already taken')