import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class usuario extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    usu_id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usu_nombres: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Nombres del usuario (primer nombre + segundo nombre)"
    },
    usu_apellidos: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "apellidos del usuario primer apellido + segundo apellido"
    },
    usu_celular: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "celular"
    },
    usu_fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "fecha de nacimiento en formato dd\/mm\/yyyy"
    },
    usu_correo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "correo creada por el usaurio"
    },
    usu_password: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "contraseña creada por el usaurio"
    },
    usu_fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "fecha de creacion del registro en la tabla"
    },
    usu_creacion: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "usuario de creacion del registro"
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "usu_id_cliente" },
        ]
      },
    ]
  });
  }
}
