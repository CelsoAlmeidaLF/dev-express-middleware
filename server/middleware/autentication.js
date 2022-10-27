import express from 'express';

export default class Middleware {
    
    Autentication(req, res, next){
        let token = req.headers.authorization.split(' ')[1] 
        let cas = '...'
        if(token === cas){
            next()
        }
        else{
            res.json({error: 'my error'})
        }
    } 
}