const { DataTypes } = require("sequelize");
module.exports = sequelize => {
  sequelize.define("Turnos", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
