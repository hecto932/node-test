var express = require('express');
var router = express.Router();

var Model = require('../models/customers');

router.get('/', function(req, res, next){
	Model.Customers.findAll().then(function(customers){
		res.send(customers);
	}).catch(function(err){
		res.send(err);
	});
})

router.get('/addCustomer', function(req, res, next){
	res.render('addcustomer', {
		title: 'Agregar cliente'
	});
});

router.post('/save', function(req, res, next){
	var Customer = req.body;

	Customer.birthday = date;
	Model.Customers.create(Customer).then(function(customer) {
		console.log(customer);
		res.redirect('/');
	}).catch(function(err){
		console.log(err);
		res.send(err);
	});
});

router.get('/show/:customerId', function(req, res, next){
	var customerId = req.params.customerId;
	//console.log(customerId);
	Model.Customers.findOne({
		where: {
			id: customerId
		}
	}).then(function(customer){
		if(customer === null){
			res.redirect('/');
		}else{
			customer.birthday = customer.birthday.split("/").reverse().join("/");
			res.render('showCustomer', {
				title: 'Datos de Cliente',
				customer: customer
			});
		}
	});
})

router.get('/delete/:customerId', function(req, res, next){
	var customerId = req.params.customerId;
	Model.Customers.destroy({
		where: {
			id: customerId
		}
	}).then(function(customer){
		//console.log(customer);
		res.redirect('/');
	});
});

router.get('/update/:customerId', function(req, res, next){
	var customerId = req.params.customerId;
	Model.Customers.findOne({
		where: {
			id: customerId
		}
	}).then(function(customer){
		if(customer === null){
			res.redirect('/');
		}else{
			res.render('updateCustomer', {
				title: 'Actualizar Cliente',
				customer: customer
			});
		}
	});
})

router.post('/update', function(req, res, next){
	var customer = req.body;
	customer.birthday = customer.birthday.split("/").reverse().join("/");
	console.log(customer);
	Model.Customers.update(customer, { where: { email: customer.email }}).then(function(customer){
		res.redirect('/');
	});
})

module.exports = router;
