const Sequelize = require('sequelize');
const db = require('../');

const Template = db.define('template', {
  field: {
    type: Sequelize.STRING,
  },
});

module.exports = Template;
