const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  createdAt: Date,
  updateAt: Date,
  finished: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task, taskSchema}