'use strict'

var jwt = require('jwt-simple');//se carga el modulo de jwt (libreria)
var moment = require('moment');//generar fechas
var secret = 'clave_secreta_BD_tren_ligero';//string secreto, si no sabemos la clave el token no se va a poder descifrar, y con esta clave se crea el token

exports.createToken = function(user){
    var payload = {//payload lleva un objeto con los datos del usuario que se desea codificar dentro del token
        sub: user._id,
        name: user.name,
        surname: user.surname,
        expediente: user.expediente,
        categoria: user.categoria,
        turno: user.turno,
        fechaRegistro: user.fechaRegistro,
        role: user.role,
        image: user.image,
        iat: moment().unix(),//iat: fecha de la creacion del token, unix: tiempo exacto en que se crea el token
        exp: moment().add(30, 'days').unix//exp:fecha de expiacion 
    };

    return jwt.encode(payload, secret)//lleva la libreria de jwtpara poder generar el token, encode lo codifica y genera un hash
};