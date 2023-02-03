const express = require('express');
const app = express();
const router = require('./routes/index');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use(express.json());
app.use('/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  /* #swagger.tags = ['App default'] */
  res.status(200).send('<h1>Connection test</h1>');
});

module.exports = app;
