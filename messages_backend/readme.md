
# package.json
```
npm init -y
```
# install express
```
npm install express --save
```

# run (without nodemon)
```
node server.js
```

# nodemon
1. 
```
npm install -g nodemon
```
2.
add in package.json under scripts 
```
"devStart": "nodemon server.js"
```

## run
```
npm run nodemon
```
<!-- For after added "devStart": "nodemon server.js" -->
```
npm run devStart
```


## test url
localhost:3000

# CORS
```
npm install cors
```

# body parser
```
npm install body-parser
```