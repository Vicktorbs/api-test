// Definicion de los esquemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir nuevo esquema de la base de datos para modelar los datos de los empleados
const User = new Schema({
    name: String,
    surname: String,//Apellido
    expediente: Number,// numero de expediente
    password: String,
    categoria: String,//el trabajador es de base o confianza
    turno: String,
    fechaRegistro: String,
    //inicioSesion: {type: Date, default: Date.now()},
    role:String,//Role_user
    image: String
}, {
    timestamps: true
});

// Pasando a modelo de datos de mongoose
module.exports = mongoose.model('UserModel', User);