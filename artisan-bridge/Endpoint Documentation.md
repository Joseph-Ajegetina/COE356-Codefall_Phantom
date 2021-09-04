# Route for endpoints

## Before_page_load - - - - ```/before_page_load```

### GET

```
Response

{"loggedIn":session['loggedIn'], "admin":session['admin'], "username":session['username'], "id":session['id']}

session[x] = str type
```

## Sign up   - - - -   ```/register```

### POST

```
Sample Data
{"name":"Kofi", "email":"kofi@gmail.com", "phone":"0232524478",
    "customer_username":"kofi", "address":"kotei",    "password":"password"}


Response 

#Success

{"message": f"Account successfully created for {request_react.get('customer_username')}", "alert": "success", "passed": True}


#Fail

{"message": f"Account successfully created for {request_react.get('customer_username')}", "alert": "success", "passed": True}

or

{"message": f"Account or Username already exists", "alert": "danger", "passed": False}

```


## Login   - - - -   ```/login```

### POST

```
Sample Data
{ "username":"kofi", "password":"password"}


Response 

#Success

return_info = {"alert": "success", "message": "Succesfully logged in", "passed": False, "type": "customer"}

#Success if admin

return_info = {"alert": "success", "message": "Succesfully logged in", "passed": False, "type": "admin"}

#Fail

return_info = {"alert": "fail", "message": "Invalid credentials", "passed": False, "type":""}

```


## Logout   - - - -   ```/logout```

### GET

```
Response 

#Success
{"Info":"success"}

```


## Sign up, Admin   - - - -   ```/register/admin```

### POST

```
#Success

{"message": f"Admin Account successfully created for {request_react.get('admin_username')}", "alert": "success", "passed": True}


#Fail

{"message": f"Admin Account successfully created for {request_react.get('admin_username')}", "alert": "success", "passed": True}

or

{"message": f"Admin Account or Username already exists", "alert": "danger", "passed": False}

```


## Load Artisan Table   - - - -   ```/admin/artisan_table```

### GET

```
Response 

{                           "id": f"{i[0]}",
                            "service_id": f"{i[1]}",
                            "first_name": f"{i[2]}",
                            "last_name": f"{i[3]}",
                            "rating": f"{i[4]}",
                            "address": f"{i[5]}",
                            "contact": f"{i[6]}",
                            "profile_image_path": f"{i[7]}",
                            "skill":""
}

```

## Load customer Table   - - - -   ```/admin/customer_table```

### GET

```
{                           "customer_id": f"{i[0]}",
                            "customer_username": f"{i[1]}",
                            "first_name": f"{i[2]}",
                            "last_name": f"{i[3]}",
                            "contact": f"{i[4]}",
                            "address": f"{i[5]}",
                            "email": f"{i[6]}",
                            "profile_image_path": f"{i[8]}"}

```



## Edit table   - - - -   ```/admin/<string:table>/edit/<string:id>```

### POST

```
Sample Data
{"artisan_username":"kofi", "password":"password"}


Response 

#Success
{"message": f"Artisan {artisan.get('last_name')} successfully added", "alert": "success", "passed": True}

#Fail
Response(status=500)

```
### DELETE
```
{"Info": "Done"}

```

## Reports - - - - ```/admin/report/<int:id>```

### GET
```
{                               "record_id": f"{i[0]}",
                                "artisan": f"{i[1]} {i[2]}",
                                "customer": f"{i[3]} {i[4]}",
                                "skill": f"{i[5]}",
                                "date": f"{i[6]}"}

```

### DELETE 

No Response

## Get_admin_services - - - - ```/admin/services/<int:id>```

### POST 
```
Response

{"message": f"{service.get('skill')} successfully added", "alert": "success", "passed": True}


if id != 0
Response

{"message": f"{service.get('skill')} successfully updated", "alert": "success", "passed": True}

```

## Update_artisan - - - - ```/admin/update/artisan/<int:id>```

### GET
```
[{#Dictionary of the table row#}, ...]
```

### POST
```
Response

{"message": f"Artisan {artisan_update.get('last_name')} successfully updated", "alert": "success", "passed":True}
```


## Popular Artisans - - - - ```/top_rated_artisans```
```
[{#Dictionary of the table row#}, ...]
```

## Popular Services - - - - ```/popular_services```
```
[{#Dictionary of the table row#}, ...]
```

## Get services - - - - ```/services/<int:id>```
### POST 
```for id == 0```
 Adding a service
```
Sample Data
{"service_type":"A service", "description": "Some Description"}
Data will be inserted
```

```for id != 0``` Updating a service
Sample Data
```
{"service_type":"A service", "description": "Some Description"}
```
Data at ```id``` will be overwritten by new data


### GET
```
{
            "id": f"{i[0]}","service": f"{i[1]}",
                            "Description": f"{i[2]}", "image": f"{i[3]}"}
```

## Report
### GET - - - -  ```/report/<int:customer_id>```
```
{                           "Artisan_name": f"{i[1]} {i[2]}",
                             "Skill": f"{i[3]}", "Date": f"{i[4]}", "rating":f"{i[5]}", "status":f"{i[7]}", "artisan_id":f"{i[8]}"
                             
                    }

```

## Logout  - - - - ```/logout```

### GET
```
Response

{"message": f"Successfully Logged out", "alert": "success", "passed":True}
```

## confirm id - - - - ```/confirm_order/<int:artisan_id>/<int:customer_id>```

### GET
```
Reponse
 
{"message": f"Request confirmed", "alert": "success", "passed":True}

```

## check_rating ( confirms whether work was done)  - - - - ```/record_status/<int:record_id>/<int:number>```

### GET
```No Response```


## rating  - - - - ```/rating/<int:record_id>/<int:artisan_id>/<float:rating>```

### GET

```No Response```




## find an Artisan page - - - - ```/find_artisan```
### GET
```
Returns
{"service_type":{"id": f"{i[0]}", "Name": f"{i[1]}", "Address": f"{i[2]}",
                               "rating": f"{i[3]}", "Path": f"{i[4]}"}, ...}
```

## find an Artisan with id - - - - ```/find_artisan/<int:artisan_id>```

### GET
```
Returns
{"service_id": f"{query[0][0]}", "artisan_id": f"{query[0][1]}", "Name":f"{query[0][2]} ","first_name": f"{query[0][2]} {query[0][3]}", "last_name":f"{query[0][3]}",
            "rating": f"{query[0][4]}", "Address": f"{query[0][5]}", "contact": f"{query[0][6]}",
            "description": f"{query[0][7]}",
            "Path": f"{query[0][8]}", "Expertise": f"{query[0][9]}"}

query[x] = str type
```

## Reports Admin - - - - ```/admin/report/<int:id>```

### DELETE
```No response, Refresh component after request```

### GET 
```
Returns

{"1":{"record_id": f"{i[0]}",
                                "artisan": f"{i[1]} {i[2]}",
                                "customer": f"{i[3]} {i[4]}",
                                "skill": f"{i[5]}",
                                "date": f"{i[6]}"}, ... }
```
