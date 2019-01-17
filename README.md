# Express Typescript Sequelize Boilerplate

![NodeJS](https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png)

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
