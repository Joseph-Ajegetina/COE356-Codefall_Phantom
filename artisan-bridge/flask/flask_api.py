from flask import Flask
from forms import LoginForm 

app = Flask(__name__)
# Key to be hashed and hidden in directory
app.config['SECRET_KEY'] = 'thisisthesecretkeywhichissupposednottobeseen'


@app.route('/')
@app.route('/home')
@app.route('/index')
def home_page():
    return "<h1>Home Page</h1>"

# Login form, validation and session to be added
@app.route('/login', methods=['POST','GET'] )
def login():
    form = LoginForm()
    return "<h1>login page</h1>"

@app.route('/sign_up', methods=['POST','GET'] )
def sign_up():
    return "<h1>Sign_up page</h1>"




@app.route('/about')
def about_page():
    return "<h1>About Page</h1>"

@app.route('/report')
def report_page():
    return "<h1>Report Page</h1>"

@app.route('/services')
def Services_page():
    return "<h1>Services Page</h1>"




if __name__ == "__main__":
    app.run(debug=True)