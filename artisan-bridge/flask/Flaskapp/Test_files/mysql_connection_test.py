import sqlalchemy as db
from sqlalchemy import create_engine, MetaData

import pymysql

engine = create_engine('mysql+pymysql://root:root@localhost:3306/artisanbridge')

connection = engine.connect()
metadata = db.MetaData()

rounds = db.Table('artisans', metadata, autoload=True, autoload_with=engine)
customers = db.Table('customers', metadata, autoload=True, autoload_with=engine)
admin = db.Table('admin', metadata, autoload=True, autoload_with=engine)


# print(connection.execute(db.select([rounds.columns.amount])).fetchall())
# print(connection.execute(db.select([admin.columns.email]).where(admin.columns.email == 'ghost')).fetchall())
# print(connection.execute(db.select([rounds.columns.amount])).fetchall())
print(connection.execute("select * from customers").fetchall())