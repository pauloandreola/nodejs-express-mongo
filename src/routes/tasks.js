const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

router.post('/', async (req, res) => {
  const { task, finished } = req.body;
  const person = { task, finished }

  if(!task) {
    res.status(404).json('Task not found!')
  }

  try {
    await Person.create(person)
  } catch(error) {
    res.status(500).json('Server error');
  }
    res.status(201).json('User created!');

})

module.exports = router;