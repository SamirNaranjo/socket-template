const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {}
        
       

        // middleware
        this.middleware();

        // Rutas de la aplicacion
        this.routes();
    }

    middleware(){
        
        // CORS
        this.app.use( cors());
        
        // Directorio Publico
        this.app.use(express.static('public'));
        
        // FileUpload - carga de archivos
    }


    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));

    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log('servidor corriedo en puerto', this.port);
        })
    }
}

module.exports = Server;