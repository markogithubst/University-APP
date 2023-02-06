# University App

This is a university application created using:

- [NodeJS](https://nodejs.org/en/docs/) (open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser)
- [Express](https://expressjs.com) (middleware web framework)
- [Sequelize](https://sequelize.org) (Node.js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more.)
- [PostgreSQL](https://www.postgresql.org/docs/) database to manage the data 

The application has 7 different databases (student, course, department, enrollment, exam, major, professor, and result) that are used to store all the relevant information.

## Prerequisites

What you need to install the software and how to install them:

 - NodeJS
 - Docker and Docker Compose

## Cloning the Repository
Clone the repository to your local machine using the following command in your terminal:

    git clone https://github.com/agilathon/marko_vukusic.git

## Installing Dependencies
Once you have cloned the repository, navigate to the project directory and run the following command to install the dependencies:

    npm install

## Creating ENV files
Once you have cloned the repository and install the dependencies. You will need to create env files so you can start the APP in different environments.
As you can see in the package.json file, you already have different scripts set up for different environments.
Example for development environment file, you need to create .env.development file in the root folder of the app. 
The file will contain env variables later used by the scripts

    DB_USERNAME=username_set_in_the_docker_compose_file 
    DB_PASSWORD=password_set_in_the_docker_compose_file 
    DB_HOST=127.0.0.1 or localhost
    DB_CONNECTION=postgres
    PORT=listening_web_server_port
    NODE_ENV=development
    DB_PORT=db_port_set_in_the_docker_compose_file

## Setting up the Databases
To set up the databases, you need to run the following command to generate a Postgres image:

    docker-compose up
This is just an example of setting up databases with Postgres using my docker-compose.yml file. 
It is easy to set up different database images in Docker (reference link to [docker documentation](https://docs.docker.com/reference/)) 

## Running the Migrations and Seeds
Once you have set up the databases, you need to run the following two scripts to create the tables and seed the data:

    npm run migrate:dev
    npm run seed:dev
    

## Generating Swagger Output
OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:
 - Available endpoints (/students) and operations on each endpoint (GET /students, POST /students)
 - Operation parameters Input and output for each operation
 - Authentication methods
 - Contact information, license, terms of use and other information.

In this app, swagger file (API description of the REST API) is generated in JSON. 
To generate the Swagger output run the following command:

    npm run generate-swagger
    
    
    
## Running the Swagger UI
In the Swagger UI you will see endpoints of the app, methods that can be used and examples of responses. You can also use different HTTP methods to get response from API and from the database.
When the server is started (using for example development environment 'npm run start:dev'), you can see Swagger UI by opening the next address in web-browser:
    http://localhost:4000/api-docs/

## Running the tests
For unit tests this app is using:
- [Jest](https://jestjs.io/docs/getting-started) (JavaScript testing framework)
- [Supertest](https://www.npmjs.com/package/supertest) (NodeJS library)
- [Child process](https://nodejs.org/api/child_process.html) (module that enables us to access Operating System functionalities by running any system command inside a child process).
In the scripts of package.json file 'test' command is already set up to start Jest for .env.test environment. 

To run the tests already set up in the 'tests/' folder, you will need to create .env.test file in the root folder of the app. It will need to have all the variables previously mentioned in the 'Creating ENV files' section.

## Conclusion
This is a basic setup guide for getting the university app up and running on your local machine. If you encounter any issues, feel free to reach out for assistance.
