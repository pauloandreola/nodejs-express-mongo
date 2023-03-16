require('dotenv').config()
const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.json());

const conn = require('./db/conn');

conn();

const routes = require('./routes/router');

app.use('/api',routes);

app.listen(port, () => (console.log(`Server is running at port => ${port}`)));