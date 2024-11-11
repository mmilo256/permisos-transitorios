import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'

const Request = sequelize.define('requests', {
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
    owner_name: DataTypes.STRING,
    owner_rut: DataTypes.STRING,
    owner_address: DataTypes.STRING,
    owner_email: DataTypes.STRING,
    owner_phone: DataTypes.STRING,
    owner_phone2: DataTypes.STRING,
    activity_name: DataTypes.STRING,
    place: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    start_time: DataTypes.TIME,
    end_date: DataTypes.DATEONLY,
    end_time: DataTypes.TIME,
    is_alcohol: DataTypes.BOOLEAN,
    is_food: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    purpose: DataTypes.STRING,
    folio: DataTypes.INTEGER,
    docs: DataTypes.JSON,
    status: {
        type: DataTypes.ENUM('pendiente', 'rechazada', 'aprobada', 'firmada', 'enviada'),
        defaultValue: "pendiente"
    },
    request_date: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }
}, { updatedAt: false })

export default Request