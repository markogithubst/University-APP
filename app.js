let express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const router = require("./routes/index")

app.use(express.json());
app.use(router);

const PORT = 3000;
const sequelize = new Sequelize('postgresql://postgres:postgres@localhost/postgres');

// startApp function was created just to test connection to the database
// database connection is set up in config folder, and index.js file in the models folder
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
    res.send("<h1>Application running</h1>")
})
