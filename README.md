# Express Typescript Sequelize Boilerplate

![NodeJS](http://nodejs-cloud.com/img/128px/nodejs.png) ![Express](http://appi.ly/images/tech-small/express.png) ![Typescript](https://releasebutler.now.sh/images/typescript.png) ![Sequelize](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/101/square_128/sequelizelogo.png)

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

### Setup Environment Variables

Copy `.env.example` and rename it `.env`. Here you will have to fill the database connection data. The project is setup to use MS SQL but Sequelize supports multiple SQL Databases like MySQL, SQLite and PostgreSQL.

### Run Project 

    yarn build
    yarn dev

If you want to watch changes then run

    yarn watch

## Upcoming

- [ ] Fix Docker support
- [ ] Add scripts for initializing database
- [ ] Add unit testing module
- [ ] Improved README
 