const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');
const { getPaciente, actualizarPaciente, eliminarPaciente, crearPaciente } = require('../controllers/pacientesController');

const { validarJWT } = require('../midlewares/validarJWT');


const router = Router();

router.get('/', getPaciente);


router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del paciente es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido del paciente es obligatorio').not().isEmpty(),
        check('dni', 'El dni del paciente es obligatorio').not().isEmpty(),
        check('direccion', 'La direccion del paciente es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono del paciente es obligatorio').not().isEmpty(),
        check('email', 'El email del paciente es obligatorio').not().isEmpty(),
        check('genero', 'El genero del paciente es obligatorio').not().isEmpty(),
        check('fechaNac', 'La fecha de nacimiento del paciente es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearPaciente);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del paciente es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido del paciente es obligatorio').not().isEmpty(),
        check('dni', 'El dni del paciente es obligatorio').not().isEmpty(),
        check('direccion', 'La direccion del paciente es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono del paciente es obligatorio').not().isEmpty(),
        check('email', 'El email del paciente es obligatorio').not().isEmpty(),
        check('genero', 'El genero del paciente es obligatorio').not().isEmpty(),
        check('fechaNac', 'La fecha de nacimiento del paciente es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarPaciente);

router.delete('/:id', validarJWT, eliminarPaciente);


module.exports = router;