import { Sequelize } from 'sequelize'
import 'dotenv/config'

// Instancia de la base de datos mySQL
/* export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: PostgresDialect
}) */

// Conexión con Postgres
/* export const sequelize = new Sequelize("postgresql://permisos_db_user:vzX44cmbapJcJbh8oReITcD3QyJ3R6kO@dpg-crgo7vjqf0us73dohls0-a.ohio-postgres.render.com/permisos_db", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true, // Asegura que se use SSL/TLS
            rejectUnauthorized: false // Desactiva la verificación del certificado (opcional)
        }
    }
}) */

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});


try {
    await sequelize.authenticate()
    console.log("Base de datos inicializada");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

