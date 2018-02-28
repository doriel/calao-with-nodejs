// Dependencies
const express = require('express');
const Sequelize = require('sequelize');

// Init express
const app = express();

// Init the db
const sequelize = new Sequelize('mysql://root:tosh@localhost/slangs_angola')
sequelize.authenticate()
.then(() => { console.log('DB is connected'); })
.catch((e) => { console.log(`DB is not connected: ${e}`);} )

// Models
const Admin = require('./models/Admin')(sequelize);
const User = require('./models/User')(sequelize);

app.get('/', (req, res) => {

	User.findAll()
	.then((admins) => {
		console.log(admins)
	});

	res.send('OK');
});

// Listen express application to server port
let port = 3000;
app.listen(port, () => {
	console.log(`The application is up and running in the ${port} port.`);
});