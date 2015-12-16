var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/salam', middleware.escapeAuth, function (request, response) {
	response.send("Salam");
});

app.get('/about', function (request, response) {
	response.send("About us");
});

app.use(express.static(__dirname+ '/public'));

app.listen(PORT, function () {
	console.log("express started on "  + PORT + " port");
});