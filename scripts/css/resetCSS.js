const logger = require("../../logger/logger")("reset.css");
const cssScript = [
	"* {",
	"\n    margin: 0;",
	"\n    padding: 0;",
	"\n    box-sizing: border-box;",
	"\n}"
];

cssScript.forEach((str) => logger.write(str));
