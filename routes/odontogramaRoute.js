const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');

const { validarJWT } = require('../midlewares/validarJWT');
const { getOdontograma, actualizarOdontograma, eliminarOdontograma, crearOdontograma } = require('../controllers/odontogramaController');


const router = Router();

router.get('/', getOdontograma);


router.post('/', [
        validarJWT,
        check('descripcion', 'La deescripcion es obligatorio').not().isEmpty(),
        check('numDiente', 'El numero del diente es obligatorio').not().isEmpty(),
        check('paciente', 'El codigo del paciente es obligatorio').not().isEmpty(),

        validarCampos
    ],
    crearOdontograma);

router.put('/:id', [
        validarJWT,
        check('numDiente', 'El codigo del diente es obligatorio').not().isEmpty(),
        check('descripcion', 'El numero del diente es obligatorio').not().isEmpty(),
        check('paciente', 'El codigo del paciente es obligatorio').not().isEmpty(),

        validarCampos
    ],
    actualizarOdontograma);

router.delete('/:id',
    validarJWT,
    eliminarOdontograma);


module.exports = router;