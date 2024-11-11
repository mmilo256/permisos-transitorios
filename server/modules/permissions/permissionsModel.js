import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'

const Permission = sequelize.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    act_doc: DataTypes.JSON,
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false })


export default Permission