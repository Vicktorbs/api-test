const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const { mongoose } = require('./database')

// Configuracion del puerto
app.set('port',  process.env.PORT || 3800);

// Recibe las peticiones del navegador
app.use(morgan('dev'));
// Convierte el codigo en formato JSON para que el servidor lo pueda entender

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/', require('./routes/user.router'));
app.use('/api/', require('./routes/maintenences-a.routes'));
app.use('/api/b/', require('./routes/maintenences-b.routes'))
app.use('/api/c/', require('./routes/maintenences-c.routes'))
app.use('/api/mayor/', require('./routes/maintenences-mayor.routes'))

app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:', app.get('port'));
});
