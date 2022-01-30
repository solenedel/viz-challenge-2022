module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Poverty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sevpov: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      poverty_geo_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      poverty_geo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hc: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      poverty_level: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      povgap: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Poverty");
  },
};
