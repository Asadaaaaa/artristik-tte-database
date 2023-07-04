'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('masterdata_country', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal(`gen_random_uuid()`)
      },
      name: {
        type: Sequelize.STRING(56),
        allowNull: false
      },
      code: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      phone_code: {
        type: Sequelize.STRING(15),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('masterdata_country');
  }
};
