import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class establecimiento extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    est_id_establecmnto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    est_nombre: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    est_direccion: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    est_correo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_nit_establecimiento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_imagen: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    est_contacto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_horario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_nombre_propietario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_contacto_propietario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    est_usu_fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    est_usu_creacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    est_id_tipo_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_pago',
        key: 'id_tipo_pago'
      }
    },
    est_id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias_estable',
        key: 'id_categoria'
      }
    }
  }, {
    sequelize,
    tableName: 'establecimiento',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "establecimiento_pkey",
        unique: true,
        fields: [
          { name: "est_id_establecmnto" },
        ]
      },
    ]
  });
  }
}
