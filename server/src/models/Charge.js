const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Charge extends Model { }

Charge.init({
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  energySource: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Charge'
});

module.exports = Charge;