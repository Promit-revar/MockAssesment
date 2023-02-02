'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Agent, {
        foreignKey: "agentName",
        targetKey: "name",
        
      });
  
    }
  }
  Match.init({
    playerName: {
      type:DataTypes.STRING,
      
    },
    playerTag: {
      type:DataTypes.STRING,
      
    },
    agentName: DataTypes.STRING,
    gunKills: DataTypes.INTEGER,
    abilityOneKills: DataTypes.INTEGER,
    abilityTwoKills: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};