module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('User', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		address: {
			type: Sequelize.STRING
		},
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE,
	});

	return User;
}