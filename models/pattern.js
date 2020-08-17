'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pattern.init({
    ordinalNumber: DataTypes.INTEGER,
    english: DataTypes.STRING,
    vietnamese: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pattern',
    tableName: 'Patterns',
    timestamps: false,
  });
  return Pattern;
};
