const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.get('/', (req, res) => taskController.getAll(req, res));

router.post('/', async (req, res) => taskController.create(req, res));

module.exports = router;