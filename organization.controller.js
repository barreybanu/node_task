const db = require('../config/db.config.js');
const Organization = db.Organization;
const User = db.User;

// Post a Organization
exports.create = (req, res) => {	
	Organization.create({  
	  Name: req.body.name,
	  Country: req.body.country,
		Address: req.body.address,
		Zipcode: req.body.zipcode
	}).then(Organization => {		
		res.send(Organization);
	});
};
 
// FETCH all Organization
exports.findAll = (req, res) => {
	Organization.findAll().then(organization => {
	  res.send(organization);
	});
};

// Find a User Organization by Id
exports.getUserorg = (req, res) => {
	Organization.findOne({
		where: {id: req.params.organizationId},
		include: [ { model: User , as: 'org',through: {
			attributes: ['orgId', 'userId'],
		} }
			 ],
	}).then(result => {
		res.send(result);
	})
};