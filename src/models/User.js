const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: NativeDate,
  updateAt: NativeDate,
});

const User = mongoose.model('User', userSchema);

module.exports = {User, userSchema}



// import mongoose from "mongoose";

// const Model = mongoose.Model;
// const ObjectId = Model.ObjectId;


// const User = new Model( {
//   id: ObjectId,
//   name: string,
//   age: number,
//   email: string,
//   password: string,
// });

// export const UserModel = mongoose.model('users', User);

// const mongoose = require('mongoose');

// const Person = mongoose.model('Person', {
//   id: ObjectId,
//   name: string,
//   age: number,
//   email: string,
//   password: string,
// })

// module.exports = Person