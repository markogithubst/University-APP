
const envArg = process.argv.find(x => x.startsWith('dotenv')) || process.argv.find(x => x.startsWith('--env'));
const env = envArg ? envArg.split('=')[1] : 'development';
require('dotenv').config({ path: `./.env.${env}` });

module.exports =
{
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432
  },
  stage: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5433
  }
};
