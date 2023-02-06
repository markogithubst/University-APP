/* eslint-disable no-useless-escape */
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
  schemes: ['http'],
  components: {
    schemas: {
      DepartmentResponseSuccessful: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Department of Mathematics and Physics'
          }
        }
      },
      NoDepartmentError: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Item not found'
          }
        }
      },
      NoConnectionDbError: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            example: 'connect ECONNREFUSED localhost:DB_PORT'
          }
        }
      },
      ValidationJoiError: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            example: ['\"id\" must be greater than or equal to 1', '\"id\" must be a number']
          }
        }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
