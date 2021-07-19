import requests
import json
from requests.structures import CaseInsensitiveDict

url = "http://localhost:5000/register"

# headers = CaseInsensitiveDict()
# headers["Content-Type"] = "application/json"

data = {
  "first_name": "Jason",
  "last_name": "Sweet",
  "phone": "+2335599111234",
  "city": "Kumasi",
  "email": "jasonsweet@gmail.com"
  
}



resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

