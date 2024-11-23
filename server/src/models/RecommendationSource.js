const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class RecommendationSource extends Model { }

RecommendationSource.init({
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  sources: {
    type: DataTypes.JSON,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'RecommendationSource'
});

module.exports = RecommendationSource;