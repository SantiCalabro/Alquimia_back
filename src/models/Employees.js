const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo

  sequelize.define(
    "Empleadas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: "Off",
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
