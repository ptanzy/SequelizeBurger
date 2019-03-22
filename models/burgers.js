'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  return Burger;
};