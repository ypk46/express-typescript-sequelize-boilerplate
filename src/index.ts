import http from 'http';
import expressServer from './server';
import dotenv from 'dotenv'
dotenv.config()

// Normalize port number which will expose server
const port = normalizePort(process.env.PORT || 3000);

// Instantiate the expressServer class
let expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);

// Create the HTTP Express Server
const server = http.createServer(expressInstance);

// Start listening on the specified Port (Default: 3000)
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Port Normalization
function normalizePort(val: number | string): number | string | boolean {
    const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    } else {
        return false;
    }
}

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `Listetning on port ${addr.port}`;
    console.log(bind);
}
