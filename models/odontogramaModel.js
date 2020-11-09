const { Schema, model } = require('mongoose');

const OdontogramaSchema = Schema({
    descripcion: {
        type: String,
        required: true
    },
    numDiente: {
        type: String,
        required: true
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    }

}, { collection: 'odontograma' });


OdontogramaSchema.method('toJSON', function() {

    const { __v, ...object } = this.toObject();

    return object;

})

module.exports = model('Odontograma', OdontogramaSchema);