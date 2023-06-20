const express = require('express');
const router = express.Router();

const myController = require('../controllers/index')
const validation = require('../middleware/validation');

router.get('/', myController.getScheduleData);

router.get('/:id', myController.getScheduleObject);

router.post('/', validation.saveSchedule, myController.createSchedule);

router.put('/:id', validation.saveSchedule, myController.updateSchedule);

router.delete('/:id', myController.deleteSchedule);


module.exports = router;