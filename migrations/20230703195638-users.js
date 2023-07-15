'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal(`gen_random_uuid()`)
      },
      country_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'masterdata_country',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      phone_number: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      phone_number_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      hashing_salt: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      nik: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      passport_id: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      selfie: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      identity_proof: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE
      }
    });

    // Indexing
    await queryInterface.addIndex('users', [
      'uuid'
    ]);
    await queryInterface.addIndex('users', [
      'username'
    ]);
    await queryInterface.addIndex('users', [
      'email'
    ]);
    await queryInterface.addIndex('users', [
      'email',
      'phone_number'
    ]);

    return;
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};