import requests
import json

url = "http://localhost:5000/admin/update/artisan/1003"

data = {
   
   "first_name": "Groot",
   "last_name": "Hack",
   "contact": "+2335599111234",
   "service_id": 1003,
   "address": "Kumasi",
   "profile_image_path": "images/artisan5.jpg",
  
  
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

