import requests
import json

url = "http://localhost:5000/login"

# data = {
   
#    "name": "Jason Sweet",
#    "customer_username": "ghost",
#    "phone": "+2335599111234",
#    "address": "Kumasi",
#    "email": "jasonsweet@gmail.com",
#    "password": "passwords"
  
#  }

data = {
  "username": "admin1",
  "password": "passwordss"
  }

# data = {
#   "admin_username": "admin1",
#   "password": "passwordss"
#   }

resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

