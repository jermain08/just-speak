'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sentence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sentence.belongsTo(models.Pattern, {
        as: 'pattern',
      })
    }
  };
  Sentence.init({
    vietnamese: DataTypes.STRING,
    english: DataTypes.STRING,
    patternId: DataTypes.INTEGER,
    audioUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sentence',
    tableName: 'Sentences',
    timestamps: false,
  });
  return Sentence;
};