const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

app.post('/', async (req, res) => {
  const { name, age, email, password } = req.body;
  const person = { name, age, email, password }

  if(!name) {
    res.status(404).json('Name not found!')
  }
  if(!age) {
    res.status(404).json('Age not found!')
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