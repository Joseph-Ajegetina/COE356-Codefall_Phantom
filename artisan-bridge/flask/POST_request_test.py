import requests
import json
from requests.structures import CaseInsensitiveDict

url = "http://localhost:5000/register"

# headers = CaseInsensitiveDict()
# headers["Content-Type"] = "application/json"

data = {
  "Username": "Something",
  "Email": "JasonSweet@gmail.com",
  "Password": "qwertyuiop",
  "confirm Password": "qwertyuiop"
}



resp = requests.post(url, data=json.dumps(data))

print(resp.status_code)
print(resp.json())

