import { sequelize } from '../../config/db.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, { timestamps: false })

export default User