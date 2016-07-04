var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://postgres:20162504@localhost:5432/nodetest', {
	define: {
		timestamps: false // true by default
	}
});

sequelize.authenticate().then(function(err){
	console.log('Connection has been stablished successfully');
})
.catch(function(err){
	console.log('No conection');
});

var Customers = sequelize.define('Customers', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	motherlastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	localphone: {
		type: Sequelize.STRING,
		allowNull: true
	},
	mobilephone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	birthday: {
		type: Sequelize.DATE,
		allowNull: false
	}
}, {
	tableName: 'customers'
});

Customers.findAll().then(function(customers){
	//console.log(customers);
}).catch(function(err){
	console.log(err);
	console.log('No se pudo realizar la prueba');
});

module.exports.Customers = Customers;
//module.exports.sequelize = sequelize;