import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'
import Permission from '../permissions/permissionsModel.js'
import President from '../presidents/presidentsModel.js'

const Organization = sequelize.define('organizations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    org_name: DataTypes.STRING,
    org_rut: DataTypes.STRING,
    org_address: DataTypes.STRING,
    org_email: DataTypes.STRING,
    org_phone: DataTypes.STRING,
    org_type: DataTypes.STRING,
    docs: DataTypes.JSON,
}, { timestamps: false })


Organization.hasOne(President);
Organization.hasMany(Permission);
Permission.belongsTo(Organization)
President.belongsTo(Organization)

export default Organization