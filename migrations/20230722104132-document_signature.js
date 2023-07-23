'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('document_signature', {
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
      serial_number: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      owner_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      file_path: {
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

    await queryInterface.addIndex('document_signature', [
      'uuid'
    ]);

    await queryInterface.addIndex('document_signature', [
      'serial_number'
    ]);

    await queryInterface.addIndex('document_signature', [
      'owner_id'
    ]);

    return;
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('document_signature');
  }
};
