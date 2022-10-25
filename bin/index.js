
import {Application} from './application.js'

class Program extends Application {
    constructor(){
        super()
        this.serverCreate();
    }
}

// Inicialização do Program
let app = new Program();