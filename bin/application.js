
import ServerHttp from '../server/index.js'

export default class Application {

    constructor(){
        console.clear();
        this.server = new ServerHttp();
    }

    serverCreate(){
        this.server.createServer();
    }
}
