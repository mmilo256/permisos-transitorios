DROP TABLE solicitudes;
CREATE TABLE solicitudes(
	id INT AUTO_INCREMENT PRIMARY KEY,
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
	start_date VARCHAR(12),
	start_time VARCHAR(12),
	end_date VARCHAR(12),
	end_time VARCHAR(12),
	is_alcohol BOOLEAN,
	is_food BOOLEAN,
	description TEXT,
	purpose TEXT,
	docs JSON
);

-- sqlite
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

-- PostgreSQL
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