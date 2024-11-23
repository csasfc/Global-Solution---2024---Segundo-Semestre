const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class OptimalChargingTime extends Model { }

OptimalChargingTime.init({
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'OptimalChargingTime'
});

module.exports = OptimalChargingTime;