import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'
import Permission from '../permissions/permissionsModel.js'
import President from '../presidents/presidentsModel.js'
import Document from '../docs/docsModel.js'

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
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false })


Organization.hasOne(President);
Organization.hasMany(Permission);
Organization.hasMany(Document);
Permission.belongsTo(Organization)
President.belongsTo(Organization)
Document.belongsTo(Organization)

export default Organization