
const envArg = process.argv.find(x => x.startsWith('dotenv'));
const env = envArg ? envArg.split('=')[1] : 'development';
require('dotenv').config({ path: `./.env.${env}` });

module.exports =
{
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  stage: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
