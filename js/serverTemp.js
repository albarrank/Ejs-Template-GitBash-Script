// writes inside server.js file
const logger = require("../logger/logger")("server.js");
const scripts = [
	"const express = require('express');",
	"\nconst app = express();",
	"\nconst path = require('path');",
	"\n\nconst PORT = process.env.PORT || 3000;",
	"\n\nconst pageRoutes = require('./routes/htmlRoutes');",
	"\nconst apiRoutes = require('./routes/apiRoutes');",
	"\napp.set('views', path.join(__dirname, 'views'));",
	"\napp.set('view engine', 'ejs');",
	"\n\napp.use(express.static('public'));",
	"\napp.use(express.urlencoded({ extended: true }));",
	"\napp.use(express.json());",
	"\n\napp.use('/', pageRoutes);",
	"\napp.use('/api', apiRoutes);",
	"\n\napp.listen(PORT, () => { console.log('server is listening on port:', PORT)})"
];

scripts.forEach((str) => logger.write(str));
