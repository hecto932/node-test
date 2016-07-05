var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://postgres:20162504@localhost:5432/nodetest', {
	define: {
		timestamps: false // true by default
	}
});

// TESTING DATABASE CONECTION
sequelize.authenticate().then(function(err){
	console.log('Connection has been stablished successfully');
})
.catch(function(err){
	console.log('No conection');
});

// CUSTOMER MODEL
var Customers = sequelize.define('Customers', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: { 
		type: Sequelize.STRING,
		validate: {
      		len: [2,60]
      	},             
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		validate: {
      		len: [2,30]
      	},    
		allowNull: false
	},
	motherlastname: {
		type: Sequelize.STRING,
		validate: {
      		len: [2,30]
      	},
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		validate: {
      		len: [0,90]
      	},
		unique: true
	},
	localphone: {
		type: Sequelize.STRING,
		validate: {
      		len: [0,20]
      	},
		allowNull: true
	},
	mobilephone: {
		type: Sequelize.STRING,
		validate: {
      		len: [0,20]
      	},
		allowNull: false
	},
	birthday: {
		type: Sequelize.DATE,
		allowNull: false
	}
}, {
	tableName: 'customers'
});

// COUNTRY MODEL
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

// ADRESSES MODEL
var Address = sequelize.define('addresses', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	street: { 
		type: Sequelize.STRING,
		validate: {
      		len: [5,80]
      	},
		allowNull: false
	},
	delegation: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,60]
      	},
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,60]
      	},
		allowNull: false
	},
	colony: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,30]
      	},
		unique: false
	},
	state: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,30]
      	},
		allowNull: false
	},
	country_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	postalcode: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,15]
      	},
		allowNull: false
	},
	customer_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, {
	tableName: 'addresses'
});

// INVOICES MODEL
var Invoices = sequelize.define('Invoices', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	rfc: {
		type: Sequelize.STRING,
		allowNull: false
	},
	reasonname: {
		type: Sequelize.STRING,
		validate: {
      		len: [2,60]
      	},
		allowNull: false
	},
	street: { 
		type: Sequelize.STRING,
		validate: {
      		len: [5,80]
      	},
		allowNull: false
	},
	delegation: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,60]
      	},
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,60]
      	},
		allowNull: false
	},
	colony: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,30]
      	},
		unique: false
	},
	state: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,30]
      	},
		allowNull: false
	},
	country_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	postalcode: {
		type: Sequelize.STRING,
		validate: {
      		len: [5,15]
      	},
		allowNull: false
	},
	customer_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	}

}, {
	tableName: 'invoices'
});


// RELATIONSHIPS

Address.belongsTo(Customers, {
	foreignKey: 'customer_id',
	as: "customer"
});

Address.belongsTo(Country, {
	foreignKey: 'country_id',
	as: "country"
});

Invoices.belongsTo(Customers, {
	foreignKey: 'customer_id',
	as: 'customer'
});

Invoices.belongsTo(Country, {
	foreignKey: 'country_id',
	as: 'country'
});


// MODULES EXPORTS
module.exports.Invoices = Invoices;
module.exports.Country = Country;
module.exports.Address = Address;
module.exports.Customers = Customers;
module.exports.sequelize = sequelize;