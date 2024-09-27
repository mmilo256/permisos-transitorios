import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'
import Organization from '../organizations/organizationsModel.js';

const President = sequelize.define('presidents', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    rut: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    phone2: DataTypes.STRING,
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false })

export default President