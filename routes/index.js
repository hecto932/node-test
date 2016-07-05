var express = require('express');
var router = express.Router();

var Model = require('../models/customers');

/* GET home page. */
router.get('/', function(req, res, next) {
	Model.Customers.findAll({
		order: 'id DESC'
	}).then(function(customers){
		//res.send(customer);
		res.render('index', {
			title: 'Lista de clientes',
			customers: customers 
		});
	});
});


module.exports = router;
