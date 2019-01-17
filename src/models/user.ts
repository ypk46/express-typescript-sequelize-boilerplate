import database from '../config/db';
import sequelize from 'sequelize';

// Database connection instance
let databaseInstance = new database().database;

// User Interface
export interface UserInterface {
    name: string;
    lastname: string;
    age: number;
}

// Sequelize Model
export const User: sequelize.Model<UserInterface, {}> = databaseInstance.define<UserInterface, {}>("User", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelize.STRING,
        allowNull: false
    },
    age: {
        type: sequelize.INTEGER,
        allowNull: false
    }
}, {
        timestamps: false
    });