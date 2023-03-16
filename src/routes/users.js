const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => userController.getAll(req, res));

router.post('/', async (req, res) => userController.create(req, res));

module.exports = router;