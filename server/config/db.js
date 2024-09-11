import { Sequelize } from 'sequelize'
import 'dotenv/config'

// Instancia de la base de datos
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: 'postgres'
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

