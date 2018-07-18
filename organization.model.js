module.exports = (sequelize, Sequelize) => {
	const Organization = sequelize.define('Organization', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},
		country: {
			type: Sequelize.STRING
		},
		address: {
			type: Sequelize.STRING
		},
		zipcode: {
			type: Sequelize.STRING
		},
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE,
	});

	return Organization;
}