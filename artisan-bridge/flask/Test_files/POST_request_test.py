import requests
import json
from requests.structures import CaseInsensitiveDict

url = "http://localhost:5000/register"

# headers = CaseInsensitiveDict()
# headers["Content-Type"] = "application/json"

data = {
  "username": "Som",
  "email": "jasonsweet",
  "password": "qwertyuiop",
  "confirm_password": "qwertyuio"
}



resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

