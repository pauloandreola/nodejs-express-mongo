const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

router.post('/', async (req, res) => userController.create(req, res));

module.exports = router;