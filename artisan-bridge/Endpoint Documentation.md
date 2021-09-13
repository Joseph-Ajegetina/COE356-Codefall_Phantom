# Route for endpoints

## Sign up   - - - -   ```/register```

### POST

```
Sample Data
{"name":"Kofi", "email":"kofi@gmail.com", "phone":"0232524478",
    "customer_username":"kofi", "address":"kotei",    "password":"password"}


Response 

#Success
{"Registration":"Registered"}

#Fail
{"Errors":(Dictonary of errors)}

```


## Login   - - - -   ```/login```

### POST

```
Sample Data
{ "username":"kofi", "password":"password"}


Response 

#Success
{"Info":"Logged in, Customer"}

#Success if admin
{"Info":"Logged in, Administrator"}

#Fail
{"Info": "invalid credentials"}

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
Sample Data
{"admin_username":"kofi", "password":"password"}


Response 

#Success
{"Registration":"Registered, Administrator"}

#Fail
{"Errors":(Dictonary of errors)}

```


## Load Artisan Table   - - - -   ```/admin/artisan_table```

### GET

```
Response 

{"Data": "[(Row 1),(Row 2), ...]" }

```



## Edit table   - - - -   ```/admin/<string:table>/edit/<string:id>```

### POST

```
Sample Data
{"artisan_username":"kofi", "password":"password"}


Response 

#Success
{"Registration":"Registered"}

#Fail
{"Errors":(Dictonary of errors)}

```
### DELETE
```
{"Info": "Done"}
or
{"Info": "Done", "More":"Artisan does not exist"}
```


## Popular Artisans - - - - ```/top_rated_artisans```
```
{"Result": "[(Name, Rating), (...), ...]"}
```

## Popular Services - - - - ```/popular_services```
```
{"Result": "[(1st), (2nd), ...]"}
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
{"Result": "[(Row 1), ...]"}
```

## Report
### GET - - - -  ```/report/<int:customer_id>```
```
{"Result":"[(1st),...]"}

Order (1st) - ('record_id','artisan_id','service_type','date')
```

## find an Artisan page - - - - ```/find_artisan```
### GET
```
Returns
{"service_type":"[(name, location, rating), ...]", "service_type":"[(name, location, rating), ...]", ...}
```

## find an Artisan with id - - - - ```/find_artisan/<int:artisan_id>```

### GET
```
Returns
{"Data":"[(name, service_type, rating, address, contact, description)]"}
```

## Reports Admin - - - - ```/admin/report/<int:id>```

### DELETE
```No response, Refresh component after request```

### GET 
```
Returns
```
```Still working on it```