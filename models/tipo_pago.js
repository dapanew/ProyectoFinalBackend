import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tipo_pago extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tipo_pago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usu_creacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_pago',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tipo_pago_pkey",
        unique: true,
        fields: [
          { name: "id_tipo_pago" },
        ]
      },
    ]
  });
  }
}
