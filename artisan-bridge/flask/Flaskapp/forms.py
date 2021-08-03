# To contain form classes for data collection and validation
from wtforms import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired, ValidationError
from Flaskapp import connection, artisans, services, customers,records, db



class LoginForm(Form):
    username = StringField('username', validators=[DataRequired(), Length(min=4,max=15)])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max= 200)])
    


class signUpForm(Form):
    
    first_name = StringField('first_name', validators=[DataRequired(), Length(min=4, max=20)])
    last_name = StringField('last_name', validators=[DataRequired(), Length(min=4, max=20)])
    email = StringField('email', validators= [DataRequired(), Email()])
    contact = StringField('contact', validators= [DataRequired()])
    customer_username = StringField('username', validators= [DataRequired()])
    address = StringField('address', validators= [DataRequired()])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max= 80)])

    # confirm_password = PasswordField('confirm password', validators=[DataRequired(),EqualTo('password')])


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

    first_name = StringField('first_name', validators=[DataRequired(), Length(min=4, max=20)])
    last_name = StringField('last_name', validators=[DataRequired(), Length(min=4, max=20)])
    email = StringField('email', validators= [DataRequired(), Email()])
    contact = StringField('contact', validators= [DataRequired()])
    service_id = StringField('service_id', validators= [DataRequired()])
    artisan_username = StringField('customer_username', validators= [DataRequired()])
    address = StringField('address', validators= [DataRequired()])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max= 80)])
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