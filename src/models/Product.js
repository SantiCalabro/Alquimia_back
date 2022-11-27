const { DataTypes } = require("sequelize");
module.exports = sequelize => {
  sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(5000),
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
};
