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
	Model.Country.findAll().then(function(countries){
		res.render('addcustomer', {
			title: 'Agregar cliente',
			countries: countries
		});
	}).catch(function(err){
		console.log(err);
		res.redirect('/');
	});
});

router.post('/save', function(req, res, next){
	var Customer = req.body;
	var date = Customer.birthday.split('/');
	Customer.birthday = new Date(date[2], date[1], date[0]);
	Model.Customers.create(Customer).then(function(customer) {
		var address = {
			street: Customer.street,
			delegation: Customer.delegation,
			city: Customer.city,
			colony: Customer.colony,
			state: Customer.state,
			country_id: Customer.country_id,
			postalcode: Customer.postalcode,
			customer_id: customer.id
		};
		console.log(address);
		Model.Address.create(address).then(function(a){
			var invoice = {
				reasonname: Customer.reasonname,
				rfc: Customer.rfc,
				street: Customer.istreet,
				delegation: Customer.idelegation,
				city: Customer.icity,
				colony: Customer.icolony,
				state: Customer.istate,
				country_id: Customer.icountry_id,
				postalcode: Customer.ipostalcode,
				customer_id: customer.id
			};
			console.log(invoice);
			Model.Invoices.create(invoice).then(function(i){
				res.send(i);
			});
		}).catch(function(err){
			res.send(err);
		});
	}).catch(function(err){
		console.log(err);
		res.send(err);
	});
});

router.get('/show/:customerId', function(req, res, next){
	var customerId = req.params.customerId;

	Model.Customers.find({
		where: {
			id: customerId
		}
	}).then(function(customer){
		if(customer === null){
			res.redirect('/');
		}else{
			console.log(customer)
			Model.Address.find({
				where: {
					customer_id: customerId
				},
				include:[
					{
						model: Model.Customers,
						as: 'customer'
					},
					{
						model: Model.Country,
						as: 'country'
					}
				]
			}).then(function(address){
				Model.Invoices.find({
					where: {
						customer_id: customerId
					},
					include:[
						{
							model: Model.Customers,
							as: 'customer'
						},
						{
							model: Model.Country,
							as: 'country'
						}
					]
				}).then(function(invoice){
					res.render('showCustomer', {
						title: 'Datos de Cliente',
						customer: customer,
						address: address,
						invoice: invoice
					});
				});
				/**/
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
