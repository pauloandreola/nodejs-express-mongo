const router = require('express').Router();

const userController = require('../controllers/userController');

router.delete('/:id', (req, res) => userController.delete(req, res));
router.get('/', (req, res) => userController.getAll(req, res));
router.get('/:id', (req, res) => userController.get(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.put('/:id', (req, res) => userController.update(req, res));

module.exports = router;