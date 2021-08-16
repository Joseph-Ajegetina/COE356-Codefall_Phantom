import sqlalchemy as db
from sqlalchemy import create_engine, MetaData

import pymysql



engine = create_engine('mysql+pymysql://root:root@localhost:3306/artisanbridge')

connection = engine.connect()
metadata = db.MetaData()
artisans = db.Table('artisans', metadata, autoload=True, autoload_with=engine)
records = db.Table('records', metadata, autoload=True, autoload_with=engine)
services = db.Table('services', metadata, autoload=True, autoload_with=engine)
customers = db.Table('customers', metadata, autoload=True, autoload_with=engine)
# admin = db.Table('admin', metadata, autoload=True, autoload_with=engine)
popular_services = db.Table('popular_services', metadata, autoload=True, autoload_with=engine)

# print(connection.execute(db.select([rounds.columns.amount])).fetchall())
# print(connection.execute(db.select([admin.columns.email]).where(admin.columns.email == 'ghost')).fetchall())
# print(connection.execute(db.select([rounds.columns.amount])).fetchall())
artisan = connection.execute(db.select([artisans.columns.service_id,
                                                    artisans.columns.artisan_id,
                                                      artisans.columns.first_name,
                                                      artisans.columns.last_name,
                                                      artisans.columns.rating,
                                                      artisans.columns.address,
                                                      artisans.columns.contact,
                                                      services.columns.description
                                                      ]).select_from(artisans.join(services, artisans.columns.service_id == services.columns.service_id)).where(artisans.columns.artisan_id == 1000)).fetchall()

# con = connection.execute(db.select([records])).fetchall()
# go = []
# for i in con:
#     go.append(list(i))

# word = str(go[0][3])
# print(word)

# for num, i in enumerate(go):
#     go[num][3] = str(go[num][3])

# print(go)
# print(con)
