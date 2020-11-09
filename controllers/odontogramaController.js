const { response } = require('express');
const Odontograma = require('../models/odontogramaModel');

const getOdontograma = async(req, res = response) => {

    const odontograma = await Odontograma.find();


    res.json({
        ok: true,
        odontograma
    });
}
const crearOdontograma = async(req, res = response) => {
    const uid = req.uid;

    const odontograma = new Odontograma({
        odontograma: uid,
        ...req.body
    });

    try {

        const odontogramaDB = await odontograma.save();
        res.json({
            ok: true,
            odontograma: odontogramaDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado hablar con el administrador'
        });
    }


}
const actualizarOdontograma = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const odontograma = await Odontograma.findById(id);
        if (!odontograma) {
            return res.status(404).json({
                ok: true,
                msg: 'Odontograma no existe'

            });
        }

        const cambiosOdontograma = {
            ...req.body,
            paciente: uid
        }

        const odontogramaActualizado = await Odontograma.findByIdAndUpdate(id, cambiosOdontograma, { new: true });

        return res.json({
            ok: true,
            odontograma: odontogramaActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }


}
const eliminarOdontograma = async(req, res = response) => {
    const id = req.params.id;

    try {

        const odontograma = await Odontograma.findById(id);
        if (!odontograma) {
            return res.status(404).json({
                ok: true,
                msg: 'Odontograma no existe'

            });
        }

        await Odontograma.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Odontograma Eliminado'

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }
}


module.exports = {
    getOdontograma,
    crearOdontograma,
    actualizarOdontograma,
    eliminarOdontograma
}