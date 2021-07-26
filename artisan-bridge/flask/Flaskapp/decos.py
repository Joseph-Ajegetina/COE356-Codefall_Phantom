# Project specific decorators
# from Flaskapp.routes import State
from Flaskapp import app



def admin_login_required(original):

    def wrapper(*args, **kwargs):

        return original(*args, **kwargs)

    # The code here will differentiate between customer and admin for security

    return wrapper

# login
def login_requireds(original):

    def wrapper():
        print(app.config['State'])
        print("wrapper")
        if app.config['State'] == True:
            return original()
        else:
            return {"Info":"Login required"}        
    
    wrapper.__name__ = original.__name__
    return wrapper
    
