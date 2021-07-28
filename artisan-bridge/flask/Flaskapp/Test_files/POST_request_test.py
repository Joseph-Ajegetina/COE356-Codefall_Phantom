import requests
import json

url = "http://localhost:5000/admin"

data = {
   "first_name": "Jason",
   "last_name": "Sweet",
   "customer_username": "ghost",
   "phone": "+2335599111234",
   "city": "Kumasi",
   "email": "jasonsweet@gmail.com",
   "password": "passwords"
  
 }

data = {
  "email": "admin@artisanbridge.com",
  "customer_username": "ghost",
  "password": "passwords"
   }

resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

