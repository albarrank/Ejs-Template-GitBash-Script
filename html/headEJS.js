const logger = require("../logger/logger")("head.ejs");
const htmlScripts = [
	"<title> Test Title </title>",
	'\n<meta charset="utf-8" />',
	'\n<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">',
	"\n\n<meta",
	'\n    name="description"',
	'\n    content="some content goes here"',
	"\n/>",
	"\n<meta",
	'\n    name="keywords"',
	'\n    content="keywords to search by"',
	"\n/>",
	'\n<meta name="author" content="Kevin Albarran" />',
	'\n<meta name="robots" content="follow" />',
	'\n\n<%- include("./css.ejs") %>'
];

htmlScripts.forEach((str) => logger.write(str));
