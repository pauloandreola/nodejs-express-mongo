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

};

module.exports = taskController;