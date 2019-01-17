import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import mainRouter from './routes';

export default class Server {

    expressInstance: express.Express;

    constructor() {

        this.expressInstance = express();
        this.middlewareSetup();
        this.routingSetup();

    }

    private middlewareSetup() {

        // Setup requests gZip compression
        this.expressInstance.use(compression());

        // Setup common security protection
        this.expressInstance.use(helmet());

        // Setup Cross Origin access
        this.expressInstance.use(cors());

        // Setup requests format parsing (Only JSON requests will be valid)
        this.expressInstance.use(bodyParser.json());

    }

    private routingSetup() {

        // Instantiate mainRouter object
        let router = new mainRouter().router;

        // Add to server routes
        this.expressInstance.use('/', router);
    }

}