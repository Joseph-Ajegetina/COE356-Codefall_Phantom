from os import error
from flask import request, session, Response
# from flask_login.utils import login_required, login_user, logout_user
from Flaskapp.forms import LoginForm, signUpForm, adminForm, artisanForm
import json
from Flaskapp import connection, artisans, services, customers, records, db, admin, popular_services, top_rated_artisans
from wtforms_json import from_json
from Flaskapp import app, bcrypt, db
from Flaskapp.decos import admin_login_required, login_requireds
from datetime import datetime


# --------------------------------------------------------------- LOGIN --------------------------------------------------------------------


@app.route('/login', methods=['POST', 'GET'])
def login():

    # session['loggedin'] = True
    # session['username'] = input("Name")
    # return {"info":"LoggedIn"}

    if request.method == 'POST':

        login_details = request.get_json(force=True)
        # login_details = json.loads(login_details)
        form = LoginForm.from_json(login_details)

        # what to be returned
        return_info = {"alert": "", "message": "", "passed": False, "type": ""}
        # Requires reformating

        user = connection.execute(db.select([customers.columns.customer_username]).where(
            customers.columns.customer_username == form.customer_username.data)).fetchall()

        admin_name = connection.execute(db.select([admin.columns.username]).where(
            admin.columns.username == form.customer_username.data)).fetchall()
<<<<<<< HEAD
        
        try:
            customer_id = connection.execute(db.select([customers.columns.customer_id]).where(
            customers.columns.customer_username == form.customer_username.data)).fetchone()[0]
        except:
            customer_id = None
=======

        customer_id = connection.execute(db.select([customers.columns.customer_id]).where(
            customers.columns.customer_username == form.customer_username.data)).fetchone()[0]
>>>>>>> database

        if user:
            password = connection.execute(db.select([customers.columns.password]).where(
                customers.columns.customer_username == form.customer_username.data)).fetchall()

            if bcrypt.check_password_hash(password[0][0], form.password.data):
                # log the user in

                # session['loggedin'] = True
                # session['id'] = customer_id
                # session['username'] = 'username'

                # return to the dashboard of the user
                return_info["passed"] = True
                return_info["alert"] = "success"
                return_info["message"] = "Successfully logged in"
                return_info["type"] = "customer"
                return_info["user"] = str(customer_id)

                return return_info

            else:
                return_info["alert"] = "danger"
                return_info["message"] = "Invalid credentials"
                return return_info

        elif admin_name:
            password = connection.execute(db.select([admin.columns.password]).where(
                admin.columns.username == form.customer_username.data)).fetchall()

            if bcrypt.check_password_hash(password[0][0], form.password.data):
                # log the user in

                # session['loggedin'] = True
                # session['id'] = customer_id
                # session['username'] = 'username'
                # session['admin'] = True

                # return to the dashboard of the user
                return_info["passed"] = True
                return_info["alert"] = "success"
                return_info["message"] = "Successfully logged in"
                return_info["type"] = "admin"
                return return_info

            else:
                return_info["alert"] = "danger"
                return_info["message"] = "Invalid credentials"
                return return_info

        else:
            return_info["alert"] = "danger"
            return_info["message"] = "Invalid credentials"
            return return_info


# ----------------------------------------------------------------- SIGN UP ----------------------------------------------------------

@app.route('/register', methods=['GET', 'POST'])
def register():

    if request.method == 'POST':

        request_react = request.get_json(force=True)
        # hashing password before converting json to form
        password = bcrypt.generate_password_hash(
            str(request_react['password'])).decode('utf-8')
        request_react['password'] = password
        customer_email = request_react.get("email")
        exist_email = connection.execute(db.select([customers.columns.email]).where(
            customers.columns.email == customer_email)).fetchall()
        if exist_email:
            return {"message": f"Account already exists", "alert": "danger", "passed": False}
        else:
            try:
                connection.execute(
                    db.insert(customers).values([dict(request_react)]))
                return {"message": f"Account successfully created for {request_react.get('customer_username')}", "alert": "success", "passed": True}
            except(error):
                return Response(status=500)


# ------------------------------------------------------- ADMINISTRATOR -------------------------------------------------------

@app.route('/register/admin', methods=['GET', 'POST'])
def Admin_register():

    if request.method == 'POST':

        request_react = request.get_json(force=True)
        # hashing password before converting json to form
        password = bcrypt.generate_password_hash(
            str(request_react['password'])).decode('utf-8')
        request_react['password'] = password

        form = adminForm.from_json(request_react)

        if form.validate():
            # -------------------------------------------
            # Database commiting and further validation
            connection.execute(db.insert(admin).values([dict(request_react)]))
            # -------------------------------------------
            return {"Registration": "Registered, Administrator"}
        else:
            return {"Errors": form.errors}

    # to be changed
    return {"Page": "Sign Up"}  # return to dashboard route


@app.route('/admin/artisan_table', methods=['GET'])
def artisan_table():

    return {"Data": str(connection.execute(db.select([artisans])).fetchall())}


# to be tested -----------------------------
@app.route('/admin/<string:table>/edit/<string:id>', methods=['POST', 'DELETE'])
# @login_required
def edit_table(id, table):

    reference = {"artisans": [artisans, artisans.columns.artisan_id],
                 "customers": [customers, customers.columns.customer_id]}

    if request.method == 'POST':
        artisan = request.get_json(force=True)
        form = artisanForm.from_json(artisan)
        if form.validate():
            # -------------------------------------------
            # Database commiting and further validation
            connection.execute(
                db.insert(reference[table]).values([dict(artisan)]))
            # -------------------------------------------
            return {"Registration_from_admin": f"Account created for {form.first_name.data}"}
        else:
            return {"Errors": form.errors}

    elif request.method == 'DELETE':
        try:
            connection.exeute(db.delete(records).where(
                records.columns.artisan_id == int(id)))
            connection.execute(db.delete(reference[table][0]).where(
                reference[table][1] == int(id)))
            return {"Info": "Done"}
        except:
            return {"Info": "Artisan does not exist, Done"}


# to be changed
@app.route('/admin/report/<int:id>', methods=['POST', 'DELETE'])
# @login_required
def reports(id):

    if request.method == 'DELETE':
        connection.execute(db.delete(records).where(
            records.columns.record_id == int(id)))

    if request.method == 'GET':
        values = connection.execute(db.select([records])).fetchall()
        return {"Result": str(values)}


@app.route('/admin/services/<int:id>', methods=['POST', 'GET'])
def get_admin_services(id):

    service = request.get_json(force=True)
    if request.method == 'POST':
        # adding a service
        if id == 0:
            connection.execute(db.insert(services).values([dict(service)]))
        else:
            # db query for updating the service
            pass

    if request.method == 'GET':
        return {"Result": str(connection.execute(db.select([services])).fetchall())}


# -------------------------------------------------------------- VIEWS -----------------------------------------------------------------

@app.route('/top_rated_artisans')
def popular_artisans():
    # select firstname, lastname, rating, coreservice from artisans table order by desc ratings limit 3
    top_rated_artisans_list = connection.execute(
        db.select([top_rated_artisans])).fetchall()
    return_items = [{**row} for row in top_rated_artisans_list]
    return_items = json.dumps(return_items, default=str)
    return return_items


@app.route('/popular_service')
def popularServices():
<<<<<<< HEAD
    query = connection.execute(db.select([popular_services])).fetchall()
    result = {}

    for num, i in enumerate(query):
        result[str(num)] = {"service": f"{i[1]}",
                            "Description": f"{i[2]}", "image": f"{i[3]}"}
                        

    return result

@app.route('/service')
def Services():
    query = connection.execute(db.select([services])).fetchall()
    result = {}

    for num, i in enumerate(query):
        result[str(num)] = {"service": f"{i[1]}",
                            "Description": f"{i[2]}", "image": f"{i[3]}"}
=======
    query = connection.execute(
        db.select([popular_services])).fetchall()
    return_items = [{**row} for row in query]
    return_items = json.dumps(return_items, default=str)
    return return_items

@app.route('/service')
def Services():
    query = connection.execute(
        db.select([services])).fetchall()
    return_items = [{**row} for row in query]
    return_items = json.dumps(return_items, default=str)
    return return_items

@app.route('/service/<int:service_id>')
def get_service(service_id):
    query = connection.execute(
        db.select([services.columns.service_id, services.columns.skill]).where(services.columns.service_id==service_id)).fetchall()

    result = {}
    for i in query:
        artisan_group = connection.execute(db.select([artisans.columns.artisan_id, artisans.columns.first_name,
                                                      artisans.columns.address,
                                                      artisans.columns.rating,
                                                      artisans.columns.profile_image_path]).where(artisans.columns.service_id == i[0])).fetchall()

        artisan_group_list = [{"id": f"{i[0]}", "Name": f"{i[1]}", "Address": f"{i[2]}",
                               "rating": f"{i[3]}", "Path": f"{i[4]}"} for i in artisan_group]
        result[i[1]] = artisan_group_list
>>>>>>> database

    return result


<<<<<<< HEAD
=======


>>>>>>> database
# -------------------------------------------------------------------- CUSTOMER ROUTES --------------------------------------------------

@app.route('/logout', methods=['GET', 'POST'])
@login_requireds
def logout():

    # session.pop('loggedin', None)
    # # id
    # session.pop('username', None)

    return {"info": 'back to login route'}


@app.route('/delete_account', methods=['DELETE'])
# @login_required
def delete_account():
    print(session['username'])
    # logout()
    # connection.execute(db.delete(customers).where(customers.columns.customer_id == int(id)))

# To be worked on
@app.route('/report/<int:customer_Id>')
# @login_required
def report(customer_Id):
    # query = connection.execute(db.select([records.columns.record_id,
    #                 artisans.columns.first_name,
    #                 artisans.columns.last_name,
    #                 services.columns.skill,
    #                 records.columns.date]).select_from(records.join(services,
    #                 records.columns.service_id == services.columns.service_id )).select_from(records.join(artisans,
    #                 records.columns.artisan_id == artisans.columns.artisan_id)).where(records.columns.customer_id == customer_Id).order_by(db.desc(records.columns.date)))

<<<<<<< HEAD
    query = connection.execute(f"SELECT r1.record_id, artisans.first_name, artisans.last_name, services.skill, r1.date FROM records as r1 INNER JOIN services ON r1.service_id = services.service_id, records as r2 INNER JOIN artisans ON r2.artisan_id = artisans.artisan_id WHERE r1.customer_id = {customer_Id} ORDER BY r1.date DESC ").fetchall()
=======
    query = connection.execute("SELECT r1.record_id, artisans.first_name, artisans.last_name, services.skill, r1.date FROM records as r1 INNER JOIN services ON r1.service_id = services.service_id, records as r2 INNER JOIN artisans ON r2.artisan_id = artisans.artisan_id WHERE r1.customer_id = 1000 ORDER BY r1.date DESC ").fetchall()
>>>>>>> database

    result = {}
    for i in query:
        result[str(i[0])] = {"Artisan_name": f"{i[1]} {i[2]}",
                             "Skill": f"{i[3]}", "Date": f"{i[4]}"}

    return result


@app.route('/confirm_order/<int:artisan_id>/<int:customer_id>')
# @login_requireds
def confirm_id(artisan_id, customer_id):
    service = connection.execute(db.select(artisans.columns.service_id).where(
        artisans.columns.artisan_id == artisan_id)).fetchall()

    connection.execute(db.insert(records).values(customer_id=customer_id,
                                                 artisan_id=artisan_id, service_id=service[0][0]))

    return {"info": 1}


# -------------------------------------------------------------------- ARTISAN ROUTES -------------------------------------------------

@app.route('/find_artisan')
# @login_required
def find_artisan():

    query = connection.execute(
        db.select([services.columns.service_id, services.columns.skill])).fetchall()

    result = {}
    for i in query:
        artisan_group = connection.execute(db.select([artisans.columns.artisan_id, artisans.columns.first_name,
                                                      artisans.columns.address,
                                                      artisans.columns.rating,
                                                      artisans.columns.profile_image_path]).where(artisans.columns.service_id == i[0])).fetchall()

        artisan_group_list = [{"id": f"{i[0]}", "Name": f"{i[1]}", "Address": f"{i[2]}",
                               "rating": f"{i[3]}", "Path": f"{i[4]}"} for i in artisan_group]
        result[i[1]] = artisan_group_list

    return result


<<<<<<< HEAD
@app.route('/find_artisan/<int:artisan_id>')
=======
@app.route('/find_artisan/<artisan_id>')
>>>>>>> database
# @login_required
def find_artisan_id(artisan_id):

    query = connection.execute(db.select([artisans.columns.service_id,
                                                    artisans.columns.artisan_id,
                                                      artisans.columns.first_name,
                                                      artisans.columns.last_name,
                                                      artisans.columns.rating,
                                                      artisans.columns.address,
                                                      artisans.columns.contact,
                                                      services.columns.description,
                                                      artisans.columns.profile_image_path,
                                                        services.columns.skill
                                                      ]).select_from(artisans.join(services, artisans.columns.service_id == services.columns.service_id)).where(artisans.columns.artisan_id == artisan_id)).fetchall()


    return {"service_id":f"{query[0][0]}", "artisan_id":f"{query[0][1]}","Name":f"{query[0][2]} {query[0][3]}",
                "rating": f"{query[0][4]}", "Address": f"{query[0][5]}", "contact": f"{query[0][6]}",
                "description":f"{query[0][7]}",
                "Path": f"{query[0][8]}", "Expertise":f"{query[0][9]}"}






# --------------------------------------------------------------------------------------------------------------------------------------------
# --------------------------------------------------------------------------------------------------------------------------------------------
# --------------------------------------------------------------------------------------------------------------------------------------------
# --------------------------------------------------------------------------------------------------------------------------------------------


# def login_requireds(*args, **kwargs):

#     def wrapper(original):
#         return original()

#     if kwargs == True:
#         return wrapper
#     else:
#         return {"Info":"Login required"}


# State = None


# admin 🙄🙄😶
@app.before_request
def before_request():

    if 'admin' in session:
        app.config['State_Admin'] = True
        # print(State)
    elif 'username' in session:
        # print(State)
        app.config['State'] = True

    else:
        app.config['State'] = None


@app.route('/dashboard', methods=['GET'])
@login_requireds
def dashboard():

    return {"info": f'the dashboard{session}'}


@app.route('/find')
def find():
    return {"electrician": [{"name": "Kojo", "age": 20, "location": "Happy family"},
                            {"name": "Kofi", "age": 20, "location": "Happy family"},
                            {"name": "Joseph", "age": 20, "location": "Happy family"}],
            "plumbers": [{"name": "Kojo", "age": 20, "location": "Happy family"},
                         {"name": "Kofi", "age": 20, "location": "Happy family"},
                         {"name": "Joseph", "age": 20, "location": "Happy family"}],
            "sellers": [{"name": "Kojo", "age": 20, "location": "Happy family"},
                        {"name": "Kojo", "age": 20, "location": "Happy family"},
                        {"name": "Kofi", "age": 20, "location": "Happy family"},
                        {"name": "Joseph", "age": 20, "location": "Happy family"}]}
