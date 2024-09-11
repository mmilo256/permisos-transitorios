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

const query = `
CREATE TABLE IF NOT EXISTS solicitudes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,   -- Usa INTEGER PRIMARY KEY AUTOINCREMENT para auto incremento
    org_name TEXT,                         -- TEXT se usa en lugar de VARCHAR en SQLite
    org_rut TEXT,
    org_address TEXT,    
    org_email TEXT,
    org_phone TEXT,
    org_type TEXT,
    owner_name TEXT,
    owner_rut TEXT,
    owner_address TEXT,    
    owner_email TEXT,
    owner_phone TEXT,
    owner_phone2 TEXT,
    activity_name TEXT,
    place TEXT,
    start_date TEXT,                       -- Usar TEXT para almacenar fechas como VARCHAR
    start_time TEXT,                       -- Usar TEXT para almacenar horas como VARCHAR
    end_date TEXT,                         -- Usar TEXT para almacenar fechas como VARCHAR
    end_time TEXT,                         -- Usar TEXT para almacenar horas como VARCHAR
    is_alcohol INTEGER,                    -- BOOLEAN en SQLite se representa como INTEGER (0 o 1)
    is_food INTEGER,                       -- BOOLEAN en SQLite se representa como INTEGER (0 o 1)
    description TEXT,
    purpose TEXT,
    docs JSON                              -- JSON en SQLite se puede almacenar como TEXT
);
`


try {
    await sequelize.query(query);
    console.log("Base de datos inicializada");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

