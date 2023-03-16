import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Test'})
})

app.listen(port, () => (console.log(`Server is running at port => ${port}`)));