//* inquired inquirer and console.table in server.js
const db = require('../config/connection.js')
const inquirer = require('inquirer')
const cTable = require('console.table');


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

startPrompt()

