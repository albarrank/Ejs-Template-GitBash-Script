const logger = require("../logger/logger")("index.ejs");

const htmlScripts = [
	"<!DOCTYPE html>",
	"\n<html>",
	"\n    <head>",
	"\n         <%- include('../partials/meta-links/head') %>",
	"\n    </head>",
	"\n    <body>",
	"\n         <main>",
	"\n             <h2> Hello World </h2>",
	"\n         </main>",
	"\n         <footer>",
	"\n         </footer>",
	"\n         <%- include('../partials/meta-links/js') %>",
	"\n    </body>",
	"\n</html>"
];

htmlScripts.forEach((str) => logger.write(str));
