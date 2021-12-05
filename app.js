const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const render = require('./src/page-template');

const DIST_DIR = path.resolve(__dirname, 'Results')
const outputPath = path.join(DIST_DIR, 'team.html');

const employees = [];

//add emopleee
function createNEWemployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Who are you adding to your team?",
            choices: ["Manager", "Engineer", "Intern", "Nobody else"],
        },
    ]).then(val => {
        if (val.role === "Manager") {
            addManager();
        }if (val.role === "Engineer") {
            addEngineer();
        } if (val.role === "Intern") {
            addIntern();
        } if (val.role === "Nobody else") {
            generateHTML(outputPath, render(employees));
        };
    });
}

// team members function
