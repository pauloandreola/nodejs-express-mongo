import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.usyc5sw.mongodb.net/bancoNodejsExpressMongo?retryWrites=true&w=majority`)
.then(() => {
  console.log('MongoDB Altas connected!')
  app.listen(port, () => (console.log(`Server is running at port => ${port}`)));
})
.catch((err) => console.log('Not connected at MongoDB Atlas verify above =>',err));


