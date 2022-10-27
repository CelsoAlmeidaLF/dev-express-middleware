import express from 'express';
import body from 'body-parser';
import ControllerHome from './controllers/home.js';
import Middleware from '../middleware/autentication.js';

const app = express();
const port = process.env.port || 3000;

export default class ServerHttp {

    constructor(){
        console.log('server rodando ...');
        this.home = new ControllerHome();
        this.autentic = new Middleware();
    }

    middleware(){
        app.use(body.json());
    }

    routers(){
        app.use(this.autentic.Autentication);
        app.get('/api/v1', this.home.index);
    }

    createServer(){ 
        this.middleware();
        this.routers();
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api/v1`));
    }

}