from os import error
from flask import request, session, Response
from flask_login.utils import login_required, login_user, logout_user
from Flaskapp.forms import LoginForm, signUpForm, adminForm, artisanForm
import json
from Flaskapp import connection, artisans, services, customers, records, db, admin, popular_services, top_rated_artisans
from wtforms_json import from_json
from Flaskapp import app, bcrypt, db
from Flaskapp.decos import admin_login_required, login_requireds


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


# Login form, validation and session to be added
# ----------------------------------------------------------------------------------------------------

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
        print("user ", user)
        print("admin ",admin_name)

        customer_id = connection.execute(db.select([customers.columns.customer_id]).where(
            customers.columns.customer_username == form.customer_username.data)).fetchall()

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

            else:
                return_info["alert"] = "danger"
                return_info["message"] = "Invalid credentials"
                return return_info

        else:
            return_info["alert"] = "danger"
            return_info["message"] = "Invalid credentials"
            return return_info


@app.route('/logout', methods=['GET', 'POST'])
@login_requireds
def logout():

    # session.pop('loggedin', None)
    # # id
    # session.pop('username', None)

    return {"info": 'back to login route'}


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






@app.route('/delete_account', methods=['DELETE'])
@login_required
def delete_account():
    print(session['username'])
    # logout()
    # connection.execute(db.delete(customers).where(customers.columns.customer_id == int(id)))


# admin routes ------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------


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


# -----------------------------------------

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


@app.route('/top_rated_artisans')
def popular_artisans():
    # select firstname, lastname, rating, coreservice from artisans table order by desc ratings limit 3
    # select * from top rated artisans
    return {"Result": str(connection.execute(db.select([top_rated_artisans])).fetchall())}


@app.route('/popular_services')
def popularServices():
    return {"Service": str(connection.execute(db.select([popular_services.columns.skill])).fetchall()),
            "Description": str(connection.execute(db.select([popular_services.columns.descriptions])).fetchall())
            }


@app.route('/services/<int:id>', methods=['POST', 'GET'])
def get_services(id):

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


@app.route('/report/<int:customer_id>')
@login_required
def report(customer_id):
    return(connection.execute(db.select([records.columns.record_id,
                                         records.columns.artisan_id,
                                         records.columns.service_type,
                                         records.columns.date]).where(records.columns.customer_id == customer_id).order_by(db.desc(records.columns.date))))
    # query to return last 10 transactions of that user


@app.route('/find_artisan')
# @login_required
def find_artisan():
    return{"DATA": str(connection.execute(db.select([artisans.columns.artisan_id,
                                                     artisans.columns.address,
                                                     artisans.columns.rating])).fetchall())}


@app.route('/find_artisan/<int:artisan_id>')
# @login_required
def find_artisan_id(artisan_id):
    # to be edited-----------------------------------------
    return {"DATA": str(connection.execute(db.select([services.columns.service_type,
                                                      artisans.columns.artisan_username,
                                                      artisans.columns.rating,
                                                      artisans.columns.address,
                                                      artisans.columns.contact,
                                                      services.columns.description]).where(artisans.columns.artisan_id == artisan_id)).fetchall())}


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
