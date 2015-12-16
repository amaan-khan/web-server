module.exports = {
	requireAuthentication: function (request, response, next) {
		console.log('requireAuthentication called !');
		next();
	},
	escapeAuth: function (request, response, next) {
		console.log('escapeAuth called, salam !');
		next();
	},
	logger: function  (request, response, next) {
		console.log("Request: "+ new Date().toString() + " " + request.method + " " + request.originalUrl);
		next();
	}
};