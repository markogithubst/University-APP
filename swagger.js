// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'University Aplication',
    description: 'Simple API overview'
  },
  host: 'localhost:4000',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
