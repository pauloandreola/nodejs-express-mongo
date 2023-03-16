const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const conn = require('./db/conn');

conn();

app.listen(port, () => (console.log(`Server is running at port => ${port}`)));