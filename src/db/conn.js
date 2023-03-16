const mongoose = require("mongoose");
require('dotenv').config()

async function main() {
  try {      

    mongoose.set('strictQuery', true);

    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.usyc5sw.mongodb.net/bancoNodejsExpressMongo?retryWrites=true&w=majority`)

    console.log('MongoDB Altas connected!')

  } catch (err) {

    console.log('Not connected at MongoDB Atlas verify above =>',err);

  }
}

module.exports = main;