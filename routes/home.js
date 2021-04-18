var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/', function(request, response) {
	connection.query('SELECT * FROM post', (error, results) => {
		if (!error) {
			response.render("home", { users: results});
		}else {
			console.log(error);
		}
	});
});

module.exports = router;