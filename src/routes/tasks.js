const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.delete('/:id', (req, res) => taskController.delete(req, res));

router.get('/', (req, res) => taskController.getAll(req, res));

router.get('/:id', (req, res) => taskController.get(req, res));

router.post('/', async (req, res) => taskController.create(req, res));

module.exports = router;