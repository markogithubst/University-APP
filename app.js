const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).send('<h1>Connection test</h1>');
});

module.exports = app;
