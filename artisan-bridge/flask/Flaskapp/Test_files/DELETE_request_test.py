import requests
import json

url = "http://localhost:5000/admin/artisans/edit/1002"


resp = requests.delete(url)

print(resp.status_code)
print(resp.json())

