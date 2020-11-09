const { Double } = require('bson');
const { Schema, model } = require('mongoose');

const DoctorSchema = Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
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
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    agenda: {
        type: Schema.Types.ObjectId,
        ref: 'Agenda',
        required: true
    }
}, { collection: 'doctores' });


DoctorSchema.method('toJSON', function() {

    const { __v, ...object } = this.toObject();

    object.uid = _id;
    return object;

})

module.exports = model('Doctor', DoctorSchema);