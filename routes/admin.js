const express = require('express');
const router = express.Router();

const myController = require('../controllers/index');
const validation = require('../middleware/validation');

router.get('/', myController.getAdminData);

router.get('/:id', myController.getAdminObject);

router.post('/', validation.saveAdmin, myController.createAdmin);

router.put('/:id', validation.saveAdmin, myController.updateAdmin);

router.delete('/:id', myController.deleteAdmin);


module.exports = router;