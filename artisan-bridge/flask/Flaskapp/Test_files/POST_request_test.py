import requests
import json

url = "http://localhost:5000/admin/artisans/edit/2"

data = {
   
   "first_name": "John",
   "last_name": "Hack",
   "artisan_username": "hack",
   "contact": "+2335599111234",
   "service_id": 1003,
   "address": "Kumasi",
   "email": "hackt@gmail.com",
  #  "password": "passworded"
  
 }

# data = {
#   "username": "ghost",
#   "password": "password"
#   }

# data = {
#   "admin_username": "admin1",
#   "password": "passwordss"
#   }

resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

