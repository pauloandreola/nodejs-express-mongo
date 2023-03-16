const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const person = { name, email, password }

  if(!name) {
    res.status(404).json('Name not found!')
  }
  if(!email) {
    res.status(404).json('Email not found!')
  }
  if(!password) {
    res.status(404).json('Password not found!')
  }

  try {
    await Person.create(person)
  } catch(error) {
    res.status(500).json('Server error');
  }
    res.status(201).json('User created!');

})

module.exports = router;