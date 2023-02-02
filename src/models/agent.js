'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.Match, {
            foreignKey: "agentName",
            targetKey: "name",
            
          });
      
    }
  }
  Agent.init({
    name: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    ability1: DataTypes.STRING,
    ability2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};