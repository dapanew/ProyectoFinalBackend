import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class servicios extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ser_id_servicio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ser_descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ser_imagen: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ser_estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ser_precio_pro: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ser_id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'establecimiento',
        key: 'est_id_establecmnto'
      }
    },
    ser_usu_fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ser_usu_creacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'servicios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "servicios_pkey",
        unique: true,
        fields: [
          { name: "ser_id_servicio" },
        ]
      },
    ]
  });
  }
}
