// Dependencies
const Sequelize = require('sequelize');

// User model
const User = require('./User');

// Slangs Model
module.exports = (sequelize) => {
	
	const Slang = sequelize.define('Slangs', {
		idSlang: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		word: { type: Sequelize.STRING, unique: true},
		description: { type: Sequelize.STRING }
	});

	// Define a relationship one-to-many:
	Slang.hasMany(User, { as: 'Owners' });

	return Slang;

}