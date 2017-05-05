# snackbarapi

###Getting Started###

Checkout this repo, install depdencies, then start the process with the following commands:

```
	> git https://github.com/tejaswaroop51/snackbarapi.git
	> cd snackbarapi
	> npm install
	> npm run start
	
	After server is started in your local, you can check check the API from postman/restclient using following
	
	Method: POST ( I made it post call for security purposes!!!!! :))
	
	API URL: http://localhost:3000/snackbar/getusers
```

To check for code lint issues run following commands from project folder. Enabled ESLint for code clean and quality

```
	> ./node_modules/.bin/eslint services/*.js
    > ./node_modules/.bin/eslint services/**/*.js
```