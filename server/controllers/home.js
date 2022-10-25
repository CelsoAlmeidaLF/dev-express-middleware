
import {v4} from 'uuid'
import{format} from 'date-fns'

export default class ControllerHome {

    index(req, res, next){     
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`
        let api = {
            uii: v4(),
            mensagem: 'testing ...',
            dt_consulta: date
        };   

        console.log(`[logado] em: ${date}`);
        res.json(api);
    }

}