const logger = require("../logger/logger")("htmlRoutes.js");
const scripts = [
	"const express = require('express');",
	"\nconst router = express.Router();",
	"\n\nrouter.get('/', (req, res) => {",
	"\n    res.render('pages/index');",
	"\n});",
	"\n\nmodule.exports = router;"
];

scripts.forEach((str) => logger.write(str));
