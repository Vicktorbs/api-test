// Conexion y modelado de la Base de datos
const mongoose = require('mongoose');

//Ubicacion de la base de datos
const URI = 'mongodb://localhost/trenligero'

// Conexion a la base de datos 
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;