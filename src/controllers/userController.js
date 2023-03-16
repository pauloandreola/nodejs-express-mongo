const { ObjectId } = require('mongodb');
const { User: UserModel } = require('../models/User');

const userController = {
  create: async(req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await UserModel.create(user);
      res.status(201).json({ response, msg: 'User created'});

    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const test = ObjectId.isValid(id);
      //Verificando se o ObjectID é válido
      if(!test) {
        return res.status(400).json('Invalid ID!');

      }
      const user = await UserModel.findById(id);

      if(!user) {
        return res.status(404).json('User not found!');
      }

      res.json(user);      
    } catch (error) {
      console.log(error); 
    }
  },
delete: async (req, res) => {
  try {
    const id = req.params.id;
    const test = ObjectId.isValid(id);
    //Verificando se o ObjectID é válido
    if(!test) {
      return res.status(400).json('Invalid ID!');

    }
    const user = await UserModel.findById(id);

    if(!user) {
      return res.status(404).json('User not found!');
    }

    const deleteUser = await UserModel.findByIdAndDelete(id);

    res.status(200).json('User deleted!')
  } catch (error) {
    console.log(error); 
  }
},

};

module.exports = userController;