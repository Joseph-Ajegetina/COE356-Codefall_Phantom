from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user

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

# Database configuration
engine = create_engine('mysql+pymysql://root:root@localhost:3306/artisanbridge')
connection = engine.connect()
metadata = db.MetaData()

# Initializing tables from database
artisans = db.Table('artisans', metadata, autoload=True, autoload_with=engine)
customers = db.Table('customers', metadata, autoload=True, autoload_with=engine)
services = db.Table('services', metadata, autoload=True, autoload_with=engine)
records = db.Table('records', metadata, autoload=True, autoload_with=engine)

# For routes in flask app
from Flaskapp import routes