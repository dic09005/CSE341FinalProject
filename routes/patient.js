const express = require('express');
const router = express.Router();

const myController = require('../controllers/index')
const validation = require('../middleware/validation');

router.get('/', myController.getPatientData);

router.get('/:id', myController.getPatientObject);

router.post('/', validation.savePatient, myController.createPatient);

router.put('/:id', validation.savePatient, myController.updatePatient);

router.delete('/:id', myController.deletePatient);


module.exports = router;