const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  createdAt: NativeDate,
  updateAt: NativeDate,
  finished: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task, taskSchema}