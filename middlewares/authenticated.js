'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_BD_tren_ligero';

exports.ensureAuth = function(req, res, next){//next se utiliza para poder mostrar lo que sigue despues de la autenticacion
    if(!req.headers.authorization){//si no llega una cabecera que sea authorization se regresa un error
        return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticacion'});
    }

    var token = req.headers.authorization.replace(/['"]+/g, ' ');//elimina del string las comillas simples y dobles y se sustituye por nada
    
    try{
        var payload = jwt.decode(token, secret);//se decodifica el payload

        if(payload.exp <= moment().unix()){//verifica si la fecha que se esta ocupando no ha expirado
            return res.status(401).send({
                message: 'El token ha expirado'
            });
        }
    }catch(ex){
        return res.status(404).send({
            message: 'El token no es valido'
        });
    }
    
    req.user = payload;

    next();//lanza lo que sigue, una vez que se ha comprobado la autenticacion
}


