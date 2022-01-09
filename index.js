const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';

const questions = () => {
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
                type: 'checkbox',
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
                name: 'email',
            },
        ])
        .then((responses) => {
            writeToFile('README.md', generateMarkdown(responses))
        })
        .catch((err) => {
            err ? console.error(err) : console.log('Error')
        })
    };

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully wrote to README.md')
    );
}

const init = () => {
    questions()
}

init();