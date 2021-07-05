from flask import Flask

app = Flask(__name__)

@app.route('/')
def home_page():
    return "<h1>Home Page</h1>"

@app.route('/about')
def about_page():
    return "<h1>About Page</h1>"

@app.route('/report')
def report_page():
    return "<h1>Report Page</h1>"

@app.route('/services')
def Services_page():
    return "<h1>services Page</h1>"


if __name__ == "__main__":
    app.run(debug=True)