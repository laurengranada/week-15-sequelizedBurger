

'use strict';
module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {

      }
     } 
  });
  return burgers;
};