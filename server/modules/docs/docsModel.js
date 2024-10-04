import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'

const Document = sequelize.define('documents', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fieldname: DataTypes.STRING,
    originalname: DataTypes.STRING,
    filename: DataTypes.STRING,
    path: DataTypes.STRING,
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false })

export default Document