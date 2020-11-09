const { response } = require('express');
const Doctor = require('../models/doctorModel');

const getDoctor = async(req, res = response) => {
    const doctor = await Doctor.find().
    populate('doctor', 'nombre').
    populate('agenda', 'estado');

    res.json({
        ok: true,
        doctor
    });
}
const crearDoctor = async(req, res = response) => {
    const uid = req.uid;

    const doctor = new Doctor({
        usuario: uid,
        ...req.body
    });

    try {

        const doctorBD = await doctor.save();
        res.json({
            ok: true,
            doctor: doctorBD
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado hablar con el administrador'
        });
    }
}
const actualizarDoctor = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({
                ok: true,
                msg: 'Doctor no existe'

            });
        }

        const cambiosDoctor = {
            ...req.body,
            usuario: uid
        }

        const doctorActualizado = await Doctor.findByIdAndUpdate(id, cambiosDoctor, { new: true });

        return res.json({
            ok: true,
            doctor: doctorActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }
}
const eliminarDoctor = async(req, res = response) => {
    const id = req.params.id;

    try {

        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({
                ok: true,
                msg: 'Doctor no existe'

            });
        }

        await Doctor.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Doctor Eliminado'

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
    getDoctor,
    crearDoctor,
    actualizarDoctor,
    eliminarDoctor
}