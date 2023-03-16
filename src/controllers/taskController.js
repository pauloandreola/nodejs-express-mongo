const { ObjectId } = require('mongodb');
const { Task: TaskModel } = require('../models/Task');

const taskController = {
  create: async(req, res) => {
    try {
      const task = {
        task: req.body.task,
        finished: req.body.finished,
      };

      const response = await TaskModel.create(task);
      res.status(201).json({ response, msg: 'Task created'});

    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const tasks = await TaskModel.find();
      res.status(200).json(tasks);
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
      const task = await TaskModel.findById(id);

      if(!task) {
        return res.status(404).json('Task not found!');
      }

      res.json(task);      
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
      const user = await TaskModel.findById(id);
  
      if(!user) {
        return res.status(404).json('Task not found!');
      }
  
      const deleteUser = await TaskModel.findByIdAndDelete(id);
  
      res.status(200).json({deleteUser, msg: 'Task deleted!'})
    } catch (error) {
      console.log(error); 
    }
  },
};

module.exports = taskController;