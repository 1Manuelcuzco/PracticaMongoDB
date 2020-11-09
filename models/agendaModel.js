const { Double } = require('bson');
const { Schema, model } = require('mongoose');

const AgendaSchema = Schema({
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: false,

    },
    estado: {
        type: String,
        required: true,

    }
}, { collection: 'agenda' });


AgendaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();

    object.uid = _id;
    return object;

})

module.exports = model('Agenda', AgendaSchema);