// Definicion de los esquemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir nuevo esquema de la base de datos para modelar los datos de los empleados
const User = new Schema({
    name: String,
    surname: String,
    expediente: Number,
    password: String,
    categoria: String,
    turno: String,
    fechaRegistro: String,
    //inicioSesion: {type: Date, default: Date.now()},
    role:String,
    image: String
});

// Pasando a modelo de datos de mongoose
module.exports = mongoose.model('UserModel', User);