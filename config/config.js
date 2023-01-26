
const envArg = process.argv.find(x => x.startsWith('dotenv'));
const env = envArg ? envArg.split('=')[1] : 'development';
require('dotenv').config({ path: `./.env.${env}` });

console.log(process.env.DB_PASSWORD);
module.exports =
{
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres'
  }
};
