const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });

app.get('/', (req, res) => {
  res.send('<h1>Connection test</h1>');
});

module.exports = app;
