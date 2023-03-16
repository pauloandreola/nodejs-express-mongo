const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

router.post('/', async (req, res) => taskController.create(req, res));

module.exports = router;