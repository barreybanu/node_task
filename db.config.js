const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect:  process.env.DB_DIALECT,
  operatorsAliases: false,

  pool: {
    max: process.env.DB_MAX,
    min: process.env.DB_POOL_MIN,
    acquire: process.env.DB_POOL_ACQUIRE,
    idle: process.env.DB_POOL_IDLE
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.User = require('../model/user.model.js')(sequelize, Sequelize);
db.Organization = require('../model/organization.model.js')(sequelize, Sequelize);

//Relations
db.Organization.belongsToMany(db.User, { as: 'org', through: 'org_usr', foreignKey: 'orgId', otherKey: 'userId'});
db.User.belongsToMany(db.Organization, { as: 'usr', through: 'org_usr', foreignKey: 'userId', otherKey: 'orgId'});

module.exports = db;