const { Schema, model } = require('mongoose');

const PacienteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    genero: {
        type: String,
        required: false
    },
    fechaNac: {
        type: Date,
        required: true
    }



}, { collection: 'pacientes' });


PacienteSchema.method('toJSON', function() {

    const { __v, ...object } = this.toObject();

    return object;

})

module.exports = model('Paciente', PacienteSchema);