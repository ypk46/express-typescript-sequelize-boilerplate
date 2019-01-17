# Express Typescript Sequelize Boilerplate

![NodeJS](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/square_128/nodejslogo.png) ![Express](http://appi.ly/images/tech-small/express.png) ![Typescript](https://releasebutler.now.sh/images/typescript.png) ![Sequelize](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/101/square_128/sequelizelogo.png)

A flexible boilerplate (IMO) for Express Typescript using Sequelize as ORM with Docker Support and some scripts to get you started.

  

*This is a personal boilerplate, it follows my personal preference so it may or not fit your project(s).*

  

## Features

  

- Node.JS 10.15.0

- Express

- Yarn

- Sequelize ORM

- Helmet

- Compression

- Docker Support

  

## Usage

### Install Dependencies

    yarn

### Setup Database with Docker (Optional)

If you have an instance of a DB then you can go to the next step and connect directly to that instance. If not, then we can easily start up a Docker container with MS SQL

    docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Pass1234@' -p 1433:1433 -d --name mssql-container mcr.microsoft.com/mssql/server:2017-latest

After that, we will access the container and create a new database

    docker exec -it mssql-container /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Pass1234@
    1> CREATE DATABASE sql_test_db
    2> GO
    1> EXIT

### Setup Environment Variables

Copy  `.env.example`  and rename it  `.env` . Here you will have to fill the database connection data. 

If you followed the *Setup Database with Docker (Optional)* then the connection information should be already set except for the `DB_HOST` which may be `localhost` if you are using Docker or an `IP` if you are using Docker Toolbox.

The project is setup to use MS SQL but Sequelize supports multiple SQL Databases like MySQL, SQLite and PostgreSQL.

### Run Project 

    yarn build
    yarn dev

If you want to watch changes then run

    yarn watch

### Build Docker Image

Using a terminal open in the root folder run

    docker build -t <IMAGE-NAME> .

Then you can run the image with

    docker run -p 3000:3000 -d <IMAGE-NAME>

### Postman Collection (Optional)

I added a Postman Collection so you just have to import the `boilerplate-postman-collection.json` in Postman and test the server user's CRUD operations.

*This part is just for testing purpose and actually is not require for the boilerplate.*

## Upcoming

- [x] Fix Docker support
- [x] Add full CRUD
- [ ] Add unit testing module
- [ ] Improved README
 
