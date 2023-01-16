

const express = require('express');

const db = require('./config/connection.js');

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


app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => { });
});

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

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err)
        }
        console.table(results)
    })
}


startPrompt()

//mainMenu();

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });