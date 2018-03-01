// Dependencies
const Sequelize = require('sequelize');

// Init sequelize
module.exports = (sequelize) => {
	return sequelize.define('Admins', {
		idAdmin: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
		email: { type: Sequelize.STRING },
		password: { type: Sequelize.STRING }
	})
}