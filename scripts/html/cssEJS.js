const logger = require("../../logger/logger")("css.ejs");
const htmlScripts = [
	"<link",
	'\n    rel="stylesheet"',
	'\n    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"',
	'\n    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"',
	'\n    crossorigin="anonymous"',
	"\n/>",
	"<link",
	'\n    rel="stylesheet"',
	'\n    href="https://fonts.googleapis.com/css?family=Montserrat|Roboto|Source+Code+Pro&display=swap"',
	"\n/>",
	'\n\n<link rel="stylesheet" type="text/css" href="assets/css/reset.css" />',
	"\n\n<link",
	'\n    rel="stylesheet"',
	'\n    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"',
	'\n    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"',
	'\n    crossorigin="anonymous"',
	"\n/>",
	'\n\n<link rel="stylesheet" type="text/css" href="assets/css/style.css" />'
];

htmlScripts.forEach((str) => logger.write(str));
