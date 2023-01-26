let express = require('express');
const app = express();
const router = require('./routes/index');

app.use(express.json());
app.use('/', router);


const PORT = 3000;

app.listen(PORT);


app.get('/', (req, res)=> {
  res.send('<h1>Connection test</h1>');
});

module.exports = app;