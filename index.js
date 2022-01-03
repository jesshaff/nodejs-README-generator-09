const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide installation instructions',
            name: 'installation instructions',
        },
        {
            type: 'input',
            message: 'Provide usage information',
            name: 'usage information',
        },
        {
            type: 'input',
            message: 'Provide contribution guidelines',
            name: 'contribution guidelines',
        },
        {
            type: 'input',
            message: 'Provide test instructions',
            name: 'test instructions',
        },
        {
            type: 'input',
            message: 'Which license did you use?',
            name: 'license',
            choices: [
            'The MIT License', 
            'The GPL License', 
            'The Apache License', 
            'The GNU License', 
            'N/A'],
            default: 'The MIT License',
        },
        {
            type: 'input',
            message: 'Provide your GitHub username',
            name: 'git username',
        },
        {
            type: 'input',
            message: 'Provide your e-mail',
            name: 'email'
    ])
