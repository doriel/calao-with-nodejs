// Dependencies
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define('Users', {
		idUser: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		email: { type: Sequelize.STRING, unique: true },
		password: { type: Sequelize.STRING },
		fullName: { type: Sequelize.STRING },
		role: { type: Sequelize.STRING }
	})
}