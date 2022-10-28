import fs from 'fs'
import { promises } from 'fs'
import path from 'path'

export default class Log {

    static async saveFile(msg){
        let message= `${msg}\n`

        try{
            if(!fs.existsSync(path.join(__dirname, '../../log/'))){
                await promises.mkdir(path.join(__dirname, '../../log/'))
            }
            await promises.appendFile(path.join(__dirname,'../../log/eventsLog.log'), message) 
        }catch(err){
            console.log(err)
        }
    }

}