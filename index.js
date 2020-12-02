require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbconection } = require('./database/config');
const app = express();

app.use(cors());

app.use(express.json());


dbconection();

app.use(express.static('public'));
app.use('/api/login', require('./routes/authRoute'));
app.use('/api/usuarios', require('./routes/usuariosRoute'));
app.use('/api/pacientes', require('./routes/pacientesRoute'));
app.use('/api/odontograma', require('./routes/odontogramaRoute'));



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})