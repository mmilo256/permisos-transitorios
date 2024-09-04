import { Sequelize } from 'sequelize'
import 'dotenv/config'

// Instancia de la base de datos
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_PASS,
    dialect: 'mysql'
})

