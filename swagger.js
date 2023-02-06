// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');
dotenv.config();
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

require('dotenv').config({
  path: '.env.development'
});

const doc = {
  info: {
    title: 'University Aplication',
    description: 'Simple API overview'
  },
  host: `localhost:${process.env.PORT}`,
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
