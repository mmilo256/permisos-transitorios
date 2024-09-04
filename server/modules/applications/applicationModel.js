import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'

const Application = sequelize.define('solicitudes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    org_name: DataTypes.STRING,
    org_rut: DataTypes.STRING,
    org_address: DataTypes.STRING,
    org_email: DataTypes.STRING,
    org_phone: DataTypes.INTEGER,
    org_type: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    owner_rut: DataTypes.STRING,
    owner_address: DataTypes.STRING,
    owner_email: DataTypes.STRING,
    owner_phone: DataTypes.INTEGER,
    owner_phone2: DataTypes.INTEGER,
    activity_name: DataTypes.STRING,
    place: DataTypes.STRING,
    start_date: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_date: DataTypes.STRING,
    end_time: DataTypes.STRING,
    is_alcohol: DataTypes.STRING,
    is_food: DataTypes.STRING,
    description: DataTypes.STRING,
    purpose: DataTypes.STRING,
    docs: DataTypes.STRING,
}, { timestamps: false })

export default Application