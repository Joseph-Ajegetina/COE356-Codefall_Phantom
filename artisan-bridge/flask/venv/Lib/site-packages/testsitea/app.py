import sys
import hashlib
from flask import Flask, render_template, request, session, jsonify
from database import db_session 
from models import User
from utils import get_hash

app = Flask(__name__)
app.secret_key = "3f77df8d52d5626bb0569d05d23d54d045562b3876a83c23" # random generate

########################
# Sample Account Page
########################
@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()    

@app.route('/sign', methods=['GET', 'POST'])
def sign_sample():
    if request.method == 'POST':
        username = request.form['username']
        password = get_hash(request.form['password'], app.secret_key)
        if User.query.filter(User.name == username).first():
            return render_template('error.html')

        u = User(username, password)
        db_session.add(u)
        db_session.commit()
        return render_template('login.html')

    return render_template('sign.html')

@app.route('/login', methods=['GET', 'POST'])
def login_sample():
    if request.method == 'POST':
        username = request.form['username']
        password = get_hash(request.form['password'], app.secret_key)
        if User.query.filter(User.name == username and User.password == password).first():
            session['logged_in'] = True
            session['username'] = username
            return render_template('index.html')
        else:
            return "Fail"

    return render_template('login.html')    

########################
# Sample JSON API
########################
@app.route('/json', methods=['GET', 'POST'])
def json_sample():
    data = {'sample':'json'}
    return jsonify(data), 200

########################
# Index
########################
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    port = 80
    if len(sys.argv) > 1:
        port = int(sys.argv[1])

    app.run(host='0.0.0.0', port=port)

