
import {File} from '../modules/file.js'
import {Repository} from '../modules/repository.js'
import {Email} from '../modules/email.js'
import {Log} from '../logs/logEvents.js'

let _file = undefined
let _data = undefined
let _log = undefined
let _email = undefined

export class Business {
    constructor(){
        _log = new Log();
        _file = new File();
        _data = new Repository();
        _email = new Email();
    }
}
