const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.routePaths = {
            products: '/api/products'
        };

        this.middlewares();
        this.routes();
        
    }

    routes() {
        this.app.use(this.routePaths.products, require('../routes/products'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        }); 
    }

}

module.exports = Server;