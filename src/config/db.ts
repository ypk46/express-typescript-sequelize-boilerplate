import sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

export default class Database {

    db: string;
    user: string;
    password: string;
    host: string;
    port: number;
    maxPool: number;
    minPool: number;
    database: sequelize.Sequelize;

    constructor() {
        this.db = process.env.DB_NAME || 'db_name';
        this.user = process.env.DB_USER || 'db_user';
        this.password = process.env.DB_PASS || 'db_pass';
        this.host = process.env.DB_HOST || 'db_host';
        this.port = Number(process.env.DB_PORT) || 1433;
        this.maxPool = Number(process.env.MAX_POOL) || 10;
        this.minPool = Number(process.env.MIN_POOL) || 1;

        this.database = new sequelize(this.db, this.user, this.password, {
            host: this.host,
            dialect: 'mssql',
            dialectOptions: {
                encrypt: true
            },
            port: this.port,
            logging: false,
            operatorsAliases: false,
            pool: {
                max: this.maxPool,
                min: this.minPool,
                acquire: 30000,
                idle: 10000
            }
        })

        this.database.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}