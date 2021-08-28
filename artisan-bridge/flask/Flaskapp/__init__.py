from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user, login_required, logout_user, current_user

import sqlalchemy as db
from sqlalchemy import create_engine, MetaData
import pymysql
from flask_cors import CORS

# To allow to json to form object passing
import wtforms_json
wtforms_json.init()

app = Flask(__name__)
CORS(app)
# Key to be hashed and hidden in directory
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'
bcrypt = Bcrypt(app)

# For sessions 
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# Database configuration
import os
from dotenv import load_dotenv

load_dotenv()
user = os.getenv('MYSQL_USERNAME')
password = os.getenv('MYSQL_PASSWORD')
print(user, password)
engine = create_engine(f'mysql+pymysql://{user}:{password}@localhost:3306/artisanbridge')
# connection = engine.connect()
metadata = db.MetaData()

# Initializing tables from database
artisans = db.Table('artisans', metadata, autoload=True, autoload_with=engine)
customers = db.Table('customers', metadata, autoload=True, autoload_with=engine)
services = db.Table('services', metadata, autoload=True, autoload_with=engine)
records = db.Table('records', metadata, autoload=True, autoload_with=engine)
admin = db.Table('admin', metadata, autoload=True, autoload_with=engine)
popular_services = db.Table('popular_services', metadata, autoload=True, autoload_with=engine)
top_rated_artisans = db.Table('top_rated_artisans', metadata, autoload=True, autoload_with=engine)
record_statuses = db.Table('record_statuses', metadata, autoload=True, autoload_with=engine)

# variables
app.config['State'] = None
app.config['State_Admin'] = None

# For routes in flask app
from Flaskapp import routes