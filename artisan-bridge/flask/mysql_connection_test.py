import sqlalchemy as db
from sqlalchemy import create_engine, MetaData

import pymysql

engine = create_engine('mysql+pymysql://root:root@localhost:3306/artisanbridge')

connection = engine.connect()
metadata = db.MetaData()

rounds = db.Table('artisans', metadata, autoload=True, autoload_with=engine)

# print(connection.execute(db.select([rounds.columns.amount])).fetchall())
print(connection.execute("desc services").fetchall())