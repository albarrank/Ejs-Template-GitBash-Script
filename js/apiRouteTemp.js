const logger = require("../logger/logger")("apiRoutes.js");
const scripts = [
	"require('dotenv').config();",
	"\nconst express = require('express');",
	"\nconst router = express.Router();",
	"\n\nrouter.post('/test', (req, res) => {});",
	"\n\nmodule.exports = router;"
];

scripts.forEach((str) => logger.write(str));
