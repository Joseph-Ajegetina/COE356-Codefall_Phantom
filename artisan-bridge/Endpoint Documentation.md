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


