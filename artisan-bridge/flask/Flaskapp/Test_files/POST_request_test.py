import requests
import json

url = "http://localhost:5000/login"

# data = {
   
#    "name": "John Hack",
#    "customer_username": "hack",
#    "phone": "+2335599111234",
#    "address": "Kumasi",
#    "email": "hackt@gmail.com",
#    "password": "passworded"
  
#  }

data = {
  "username": "ghost",
  "password": "password"
  }

# data = {
#   "admin_username": "admin1",
#   "password": "passwordss"
#   }

resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())
