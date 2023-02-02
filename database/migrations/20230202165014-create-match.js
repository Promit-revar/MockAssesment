'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      playerName: {
      
        type: Sequelize.STRING
      },
      playerTag: {
        //primaryKey: true,
        type: Sequelize.STRING
      },
      agentName: {
        type: Sequelize.STRING
      },
      gunKills: {
        type: Sequelize.INTEGER
      },
      abilityOneKills: {
        type: Sequelize.INTEGER
      },
      abilityTwoKills: {
        type: Sequelize.INTEGER
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  }
};