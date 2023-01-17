

const express = require('express');

//* from connection.js
const mysql = require('mysql2');

//const db = require('./config/connection.js');

//* import models with prompts to then start data tables based on input
//const mainMenu = require('./lib/prompt.js');

//* from prompt.js
//* inquired inquirer and console.table in server.js
//const db = require('../config/connection.js')
const inquirer = require('inquirer')
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

//* middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* from connection.js
const db = mysql.createConnection(
    {
        host: 'kaylacasale', //* your user name
        user: 'root',
        password: 'iamacoder',
        database: 'employee_tracker_db', //* name of database you want to connect to
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

db.connect(err => {
    if (err) {
        console.error(err)
    }
    app.listen(PORT, () => { });
});

// app.use((req, res) => {
//     res.status(404).end();
// });




//* from prompt.js
function startPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'Please select one.',
                choices: ['View all departments', 'View all Roles', 'View all employees', 'Add a department.', 'Add a role.', 'Add an employee.', 'Update an employee role.']
            }
        ])
        .then((answer) => {
            switch (answer.menu) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addADepartment();
                    break
                case 'Add a role':
                    addARole();
                    break
                case 'Add an empoloyee':
                    addAnEmployee();
                    break
                case 'Update en employee role':
                    updateAnEmployeeRole()
                    break
            }
        })
};

// function viewAllDepartments() {
//     db.query('SELECT * FROM department', function (err, results) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.table(results)
//     })
// }


startPrompt()

//mainMenu();

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});