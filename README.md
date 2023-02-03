# University App

This is a university application created using: 
NodeJS
Express (middleware web framework)
Sequelize (NodeJS ORM)
Postgres database to manage the data 

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

## Setting up the Databases
To set up the databases, you need to run the following command to generate a Postgres image:

    docker-compose up

## Running the Migrations and Seeds
Once you have set up the databases, you need to run the following two scripts to create the tables and seed the data:

    npm run migrate:dev
    npm run seed:dev
    

## Generating Swagger Output
To generate the Swagger output, run the following command:
    http://localhost:4000/api-docs/

## Conclusion
This is a basic setup guide for getting the university app up and running on your local machine. If you encounter any issues, feel free to reach out for assistance.
