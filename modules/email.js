
export default class Email {
    constructor(){
        super()
    }

    async mailSend(to, subject, body, html = false) {

        let from = 'from';
        let { host, user, pass } = this.server('user');
        let info

        try{
            
            let transporter = nodemailer.createTransport({
                host: host,
                port: 587,
                secure: false,
                auth: {
                    user: user,
                    pass: pass
                }
            });

            //console.log(transporter)

            if(html === true){
                // send mail with defined transport object
                info = await transporter.sendMail({
                    from: from, // sender address
                    to: to, // list of receivers
                    subject: subject, // Subject line
                    html: body, // html body
                });
            }
            else{
                // send mail with defined transport object
                info = await transporter.sendMail({
                    from: from, // sender address
                    to: to, // list of receivers
                    subject: subject, // Subject line
                    text: body, // html body   
                });
            }
        }
        catch(err){
            throw err;
        }

    }

}