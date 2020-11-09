const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');
const { getDoctor, actualizarDoctor, eliminarDoctor, crearDoctor } = require('../controllers/doctorController');

const { validarJWT } = require('../midlewares/validarJWT');


const router = Router();

router.get('/', getDoctor);


router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del doctor es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearDoctor);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del doctor es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarDoctor);

router.delete('/:id', validarJWT, eliminarDoctor);



module.exports = router;