module.exports = function(file) {
	const fs = require("fs");
	const options = {
		// 'a' meaning append (old data is preserved)
		flags: "a"
	};
	const logger = fs.createWriteStream(file, options);

	return logger;
};
