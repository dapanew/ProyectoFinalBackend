import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categorias_estable extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_categoria: {
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
    tableName: 'categorias_estable',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categoria_estable_pkey",
        unique: true,
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "categorias_estable_pkey",
        unique: true,
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  }
}
