# Project specific decorators
# from Flaskapp.routes import State
from Flaskapp import app



def admin_login_required(original):

    def wrapper():
        if app.config['State_Admin'] == True:
            return original()
        else:
            return {"Info":"Login required, Administrator"}        
    
    wrapper.__name__ = original.__name__
    # The code here will differentiate between customer and admin for security

    return wrapper

# login
def login_requireds(original):

    def wrapper():
        
        if app.config['State'] == True:
            return original()
        else:
            return {"Info":"Login required"}        
    
    wrapper.__name__ = original.__name__
    return wrapper
    
