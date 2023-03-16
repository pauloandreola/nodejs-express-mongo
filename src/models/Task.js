const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  createdAt: Date,
  updateAt: Date,
  finished: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task, taskSchema}