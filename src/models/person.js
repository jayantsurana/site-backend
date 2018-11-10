const express = require('express');
const app = express();
const Sequelize = require('../db.js').Sequelize;
var sequelize = require('../db.js').sequelize;

const Person = sequelize.define('person', {
  name: {
    type: Sequelize.STRING
  }
},
{
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'person'
});

module.exports.person = Person;
