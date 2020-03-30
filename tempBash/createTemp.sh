#!/usr/bin/bash

# PATH VARIABLE FOR SCRIPTS
export MY_PATH="/c/Users/albar/Desktop/Tools/bashTools"

# FILES IN HOME DIRECTORY
npm init -y
npm i dotenv ejs express

touch .gitignore
touch README.md
touch .env
node $MY_PATH/scripts/js/serverTemp.js

# FOLDERS IN HOME DIRECTORY
mkdir config
mkdir models
mkdir public
mkdir routes
mkdir test
mkdir views

# CREATE EXPRESS ROUTES
cd ./routes
node $MY_PATH/scripts/js/apiRouteTemp.js
node $MY_PATH/scripts/js/htmlRouteTemp.js

# PUBLIC FOLDERS FOR APP
cd ./../public
mkdir js
mkdir images
mkdir files
mkdir css
cd ./js
touch index.js
cd ./../css
node $MY_PATH/scripts/css/resetCSS.js
touch style.css
cd ./../

# EJS VIEW ENGINE FILES
cd ./../views
mkdir pages
mkdir partials

cd ./partials
mkdir meta-links

cd ./meta-links
node $MY_PATH/scripts/html/cssEJS.js
node $MY_PATH/scripts/html/headEJS.js
node $MY_PATH/scripts/html/jsEJS.js

cd ./../../pages
node $MY_PATH/scripts/html/indexEJS.js




