import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'
import Organization from '../organizations/organizationsModel.js';

const Permission = sequelize.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activity_name: DataTypes.STRING,
    place: DataTypes.STRING,
    start_date: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_date: DataTypes.STRING,
    end_time: DataTypes.STRING,
    is_alcohol: DataTypes.BOOLEAN,
    is_food: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    purpose: DataTypes.STRING,
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false })


export default Permission