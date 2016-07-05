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

var Country = sequelize.define('Country', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	iso: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	iso3: {
		type: Sequelize.STRING,
		allowNull: false
	},
	numcode: {
		type: Sequelize.STRING,
		unique: true
	},
	phonecode: {
		type: Sequelize.STRING,
		allowNull: true
	}
}, {
	tableName: 'country'
});

var Address = sequelize.define('addresses', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	street: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	delegation: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	colony: {
		type: Sequelize.STRING,
		unique: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	country_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	postalcode: {
		type: Sequelize.STRING,
		allowNull: false
	},
	customer_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, {
	tableName: 'addresses'
});

Address.belongsTo(Customers, {
	foreignKey: 'customer_id',
	as: "customer"
});

Address.belongsTo(Country, {
	foreignKey: 'country_id',
	as: "country"
});

/*
Customers.findAll().then(function(customers){
	//console.log(customers);
}).catch(function(err){
	console.log(err);
	console.log('No se pudo realizar la prueba');
});
*/

module.exports.Country = Country;
module.exports.Address = Address;
module.exports.Customers = Customers;
module.exports.sequelize = sequelize;