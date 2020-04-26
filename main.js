const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const { mongoose } = require('./database')

// Configuracion del puerto
app.set('port',  process.env.PORT || 3000);

// Recibe las peticiones del navegador
app.use(morgan('dev'));
// Convierte el codigo en formato JSON para que el servidor lo pueda entender

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/maintanence-a', require('./routes/maintenences-a.routes'));
app.use('/api/user', require('./routes/user.router'));


app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:', app.get('port'));
});
