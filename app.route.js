module.exports = function(app) {
 
    const user = require('../controller/user.controller.js');
    const organization = require('../controller/organization.controller.js');
 
    // Create a new user
    app.post('/api/users', user.create);
 
    // Retrieve all user
    app.get('/api/users', user.findAll);
 
    // Retrieve a single user by Id
    app.get('/api/users/:userId', user.findById);
 
    // Update a user with Id
    app.put('/api/users/:userId', user.update);
 
    // Delete a user with Id
    app.delete('/api/users/:userId', user.delete);

    // Delete a user with Id
    app.get('/api/users/:userId/organizations', user.user_org);

    // Create a new organization
    app.post('/api/organizations', organization.create);

    // Retrieve all organization
    app.get('/api/organizations', organization.findAll);

    // Retrieve users in organization by organization id
    app.get('/api/organizations/:organizationId/users', organization.getUserorg);



}