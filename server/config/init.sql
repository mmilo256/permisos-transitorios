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
	docs TEXT
);