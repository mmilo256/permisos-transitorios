import { Sequelize } from 'sequelize'
import 'dotenv/config'

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

