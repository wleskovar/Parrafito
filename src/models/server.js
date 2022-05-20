const express= require('express');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        // Middlewares
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware() {
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) =>{
            res.send('hola mundo');
        });
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
        });
        
    }

}




module.exports= Server;