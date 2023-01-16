//* 'npm init -y'
//* 'npm i inquirer@8.2.4
//* 'npm i mysql2'
//* npm install console.table (https://www.npmjs.com/package/console.table)
//* 'npm i dotenv'

//* import and require mysql2
const mysql = require('mysql2');


//* require 'dotenv' to create .env containing hidden codes
//require('dotenv').config();

//* connect to the db (database)
//* tried securing info wit dotenv, but would not work
// const db = mysql.createConnection(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'iamacoder',
//         database: 'employee_tracker_db'
//     },
//     console.log(`Connected to the employee_db database!`)
// )

const db = mysql.createConnection(
    {
        host: 'kaylacasale', //* your user name
        user: 'root',
        password: 'iamacoder',
        database: 'employee_tracker_db' //* name of database you want to connect to
    },
    console.log(`Connected to the employee_tracker_db database.`)
);



module.exports = db;