// import * as dotenv from 'dotenv';
// dotenv.config()
// import express from 'express';
// import mongoose from 'mongoose';

// // import UserModel from './models/Person';

// const app = express();
// const port = 3000;

// // const Person = require('/src/models/Person');
// // import Person from './models';

// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

// app.post('/', async (req, res) => {
//   const { name, age, email, password } = req.body;
//   const person = { name, age, email, password }

//   if(!name) {
//     res.status(404).json('Name not found!')
//   }
//   if(!age) {
//     res.status(404).json('Age not found!')
//   }
//   if(!email) {
//     res.status(404).json('Email not found!')
//   }
//   if(!password) {
//     res.status(404).json('Password not found!')
//   }

//   try {
//     await Person.create(person)
//   } catch(error) {
//     res.status(500).json('Server error');
//   }
//     res.status(201).json('User created!');

// })

// app.get('/', (req, res) => {
//   res.status(200).json({msg: 'Test'})
// })

// await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.usyc5sw.mongodb.net/bancoNodejsExpressMongo?retryWrites=true&w=majority`)
// .then(() => {
//   console.log('MongoDB Altas connected!')
//   app.listen(port, () => (console.log(`Server is running at port => ${port}`)));
// })
// .catch((err) => console.log('Not connected at MongoDB Atlas verify above =>',err));
