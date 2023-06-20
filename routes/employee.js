const express = require('express');
const router = express.Router();

const myController = require('../controllers/index')
const validation = require('../middleware/validation');

router.get('/', myController.getEmployeeData);

router.get('/:id', myController.getEmployeeObject);

router.post('/', validation.saveEmployee, myController.createEmployee);

router.put('/:id', validation.saveEmployee, myController.updateEmployee);

router.delete('/:id', myController.deleteEmployee);


module.exports = router;