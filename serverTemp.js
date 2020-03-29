const fs = require("fs");

fs.appendFile("server.js", "some test", (err) => {
	if (err) console.log(err);
	else console.log("success");
});
// const logger = fs.createWriteStream()
