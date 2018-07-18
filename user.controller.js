const db = require('../config/db.config.js');
const User = db.User;
const Organization = db.Organization;


// Post a User
exports.create = (req, res) => {
	// Save to MySQL database
	User.create({
		Name: req.body.name,
		Email: req.body.email,
		Address: req.body.address
	}).then(user => {
		res.send(user);
	});
};

// FETCH User
exports.findAll = (req, res) => {
	User.findAll().then(users => {
		res.send(users);
	});
};

// Find a User by Id
exports.findById = (req, res) => {
	User.findById(req.params.userId).then(user => {
		res.send(user);
	})
};

// Update a User
exports.update = (req, res) => {
	const id = req.params.userId;
	User.update({ Name: req.body.name, Email: req.body.email, Address: req.body.address },
		{ where: { id: req.params.userId } }
	).then(() => {
		res.status(200).send("updated successfully a user with id = " + id);
	});
};

// Delete a user by Id
exports.delete = (req, res) => {
	const id = req.params.userId
	User.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a user ith id = ' + id);
	});
};

// Find a User Organization by Id
exports.user_org = (req, res) => {
	User.findOne({
		where: {id: req.params.userId},
		attributes: ['id', ['name', 'full name'],'email'],
		include: [ { model: Organization, as: 'usr' ,
		through: {
			attributes: ['orgId', 'userId'],
		}
		}],
		
	}).then(user => {
		res.send(user);
	})
};