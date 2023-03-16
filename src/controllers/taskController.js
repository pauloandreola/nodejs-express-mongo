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
      const findTask = await TaskModel.findById(id);

      if(!findTask) {
        return res.status(404).json('Task not found!');
      }

      res.json(findTask);      
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
      const findTask = await TaskModel.findById(id);
  
      if(!findTask) {
        return res.status(404).json('Task not found!');
      }
  
      const deleteTask = await TaskModel.findByIdAndDelete(id);
  
      res.status(200).json({deleteTask, msg: 'Task deleted!'})
    } catch (error) {
      console.log(error); 
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const test = ObjectId.isValid(id);
    //Verificando se o ObjectID é válido
    if(!test) {
      return res.status(400).json('Invalid ID!');

    }
    const findTask = await TaskModel.findById(id);

    if(!findTask) {
      return res.status(404).json('Task not found!');
    }
    const task = {
      task: req.body.task,
      finished: req.body.finished,
    };

    const updateTask = await TaskModel.findByIdAndUpdate(id, task);

    res.status(200).json({task, msg: 'Task updated!'})
  },
};

module.exports = taskController;