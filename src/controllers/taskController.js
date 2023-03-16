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
}

module.exports = taskController;