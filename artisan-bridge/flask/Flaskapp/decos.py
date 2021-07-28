# Project specific decorators

def admin_login_required(original):

    def wrapper(*args, **kwargs):

        return original(*args, **kwargs)

    # The code here will differentiate between customer and admin for security

    return wrapper()
