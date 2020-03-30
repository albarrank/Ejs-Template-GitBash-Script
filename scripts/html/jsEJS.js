const logger = require("../../logger/logger")("js.ejs");
const htmlScripts = [
	"<script",
	'\n    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"',
	'\n    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"',
	'\n    crossorigin="anonymous"',
	"\n></script>",
	"\n\n<script",
	'\n    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"',
	'\n    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"',
	'\n    crossorigin="anonymous"',
	"\n></script>",
	"\n\n<script",
	'\n    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"',
	'\n    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"',
	'\n    crossorigin="anonymous"',
	"\n></script>",
	'\n\n<script src="/assets/js/index.js"></script>'
];

htmlScripts.forEach((str) => logger.write(str));
