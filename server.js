let express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

app.use(express.json());

const PORT = 3000;
const sequelize = new Sequelize('postgresql://postgres:postgres@localhost/postgres');

const startApp = async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
        app.listen(PORT)
        console.log(`Application started, listening on port ${PORT}...`);
      } catch (error) {
        console.error(error.message);
      }
}
startApp()

app.get('/', (req, res)=> {
    res.send("<h1>Connection test</h1>")
})
