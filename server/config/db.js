import { Sequelize } from 'sequelize'
import 'dotenv/config'

// Instancia de la base de datos mySQL
/* export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: PostgresDialect
}) */

// Conexión con Postgres
export const sequelize = new Sequelize("postgresql://permisos_db_user:vzX44cmbapJcJbh8oReITcD3QyJ3R6kO@dpg-crgo7vjqf0us73dohls0-a.ohio-postgres.render.com/permisos_db", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true, // Asegura que se use SSL/TLS
            rejectUnauthorized: false // Desactiva la verificación del certificado (opcional)
        }
    }
})

/* export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
}); */

/* const query = `
DROP TABLE IF EXISTS solicitudes;

CREATE TABLE solicitudes (
    id SERIAL PRIMARY KEY,
    org_name VARCHAR(100),
    org_rut VARCHAR(15),
    org_address VARCHAR(100),
    org_email VARCHAR(50),
    org_phone VARCHAR(15),
    org_type VARCHAR(100),
    owner_name VARCHAR(100),
    owner_rut VARCHAR(15),
    owner_address VARCHAR(100),
    owner_email VARCHAR(50),
    owner_phone VARCHAR(15),
    owner_phone2 VARCHAR(15),
    activity_name VARCHAR(100),
    place VARCHAR(100),
    start_date DATE,
    start_time TIME,
    end_date DATE,
    end_time TIME,
    is_alcohol BOOLEAN,
    is_food BOOLEAN,
    description TEXT,
    purpose TEXT,
    docs JSON
);
` */


/* try {
    await sequelize.query(query);
    console.log("Base de datos inicializada");
} catch (error) {
    console.error('Unable to connect to the database:', error);
} */

