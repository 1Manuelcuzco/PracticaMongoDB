const mongoose = require('mongoose');

const dbconection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conexion exitosa a Base de datos ');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a la Base de datos');
    }
}
module.exports = {
    dbconection
}