import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _categorias_estable from  "./categorias_estable.js";
import _establecimiento from  "./establecimiento.js";
import _servicios from  "./servicios.js";
import _tipo_pago from  "./tipo_pago.js";
import _usuario from  "./usuario.js";

export default function initModels(sequelize) {
  const categorias_estable = _categorias_estable.init(sequelize, DataTypes);
  const establecimiento = _establecimiento.init(sequelize, DataTypes);
  const servicios = _servicios.init(sequelize, DataTypes);
  const tipo_pago = _tipo_pago.init(sequelize, DataTypes);
  const usuario = _usuario.init(sequelize, DataTypes);

  establecimiento.belongsTo(categorias_estable, { as: "est_id_categoria_categorias_estable", foreignKey: "est_id_categoria"});
  categorias_estable.hasMany(establecimiento, { as: "establecimientos", foreignKey: "est_id_categoria"});
  servicios.belongsTo(establecimiento, { as: "ser_id_categoria_establecimiento", foreignKey: "ser_id_categoria"});
  establecimiento.hasMany(servicios, { as: "servicios", foreignKey: "ser_id_categoria"});
  establecimiento.belongsTo(tipo_pago, { as: "est_id_tipo_pago_tipo_pago", foreignKey: "est_id_tipo_pago"});
  tipo_pago.hasMany(establecimiento, { as: "establecimientos", foreignKey: "est_id_tipo_pago"});

  return {
    categorias_estable,
    establecimiento,
    servicios,
    tipo_pago,
    usuario,
  };
}
