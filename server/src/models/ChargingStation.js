const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ChargingStation extends Model { }

ChargingStation.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Disponível',
  },
}, {
  sequelize,
  modelName: 'ChargingStation'
});

module.exports = ChargingStation;