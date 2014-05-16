var express = require("express");
var app = express();

app.use("/", express.static("public"));
app.use("/components", express.static("bower_components"));

var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log("Listening on port " + port);
});
