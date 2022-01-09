// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';

// Welcome messages that display prior to prompts 
console.log('Welcome to my README generator!')
console.log('Answer the following questions to generate a high quality README for your project.')

// Array of questions for user input
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
                message: 'Provide a short description of your project',
                name: 'description',
             },
            {
                type: 'checkbox',
                message: 'Which command should be run to install dependencies?',
                name: 'installation',
                choices: ['npm install'],
                default: 'nmp install',
            },
            {
                type: 'input',
                message: 'What information does the user need to know about using the repo?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What does the user need to know about contributing to the repo?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'Which command should be run to run tests?',
                name: 'test',
                choices: ['node index.js'],
                default: 'node index.js',
            },
            {
                type: 'checkbox',
                message: 'Which license did you use?',
                name: 'license',
                choices: [
                'MIT', 
                'GPL 3.0', 
                'Apache 2.0',
                'BSD 3', 
                'N/A'],
                default: 'MIT',
            },
            {
                type: 'input',
                message: 'Provide your GitHub username',
                name: 'username',
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

    // Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully wrote to README.md')
    );
}

// Function to initialize the app 
const init = () => {
    questions()
}

// Function to call to initialize the app 
init();