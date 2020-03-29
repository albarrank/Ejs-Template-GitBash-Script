#!/usr/bin/bash

# create folder skeleton for projects
# mkdir config
# mkdir models
# mkdir public
# mkdir routes
# mkdir test
# mkdir views

# touch .gitignore
touch server.js
# touch README.md
# touch .env

# cd ./public
# mkdir js
# mkdir css
# mkdir images
# mkdir files

# cd ./../views
# mkdir pages
# mkdir partials

# cd ..

# create npm package and install dependencies 
# npm init -y
# npm i dotenv ejs express

# write inside server.js file
echo "const express = require('express');" >> server.js
echo "const app = express();" >> server.js
echo "const path = require('path');" >> server.js

echo "" >> server.js

echo "const PORT = process.env.PORT || 3000;" >> server.js

echo "" >> server.js

echo "const pageRoutes = require('./routes/htmlRoutes');" >> server.js
echo "const apiRoutes = require('./routes/apiRoutes');" >> server.js

echo "" >> server.js

echo "app.set('views', path.join(__dirname, 'views'));" >> server.js
echo "app.set('view engine', 'ejs');" >> server.js

echo "" >> server.js

echo "app.use(express.static('public'));" >> server.js
echo "app.use(express.urlencoded({ extended: true }));" >> server.js
echo "app.use(express.json());" >> server.js

echo "" >> server.js

echo "app.use('/', pageRoutes);" >> server.js
echo "app.use('/api', apiRoutes);" >> server.js

echo "" >> server.js

echo "app.listen(PORT, () => { console.log('server is listening on port:', PORT)})" >> server.js





