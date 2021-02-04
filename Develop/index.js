// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?', 'What is your email address', "What is your project's name", 'Please write a short description of your project', 'What kind of license should your project have?', 'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?', 'What does the user need to know about contributing to the repo?'];

const promptUser = () => {
inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: questions[0] + '(Required)',
        validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },

    {
        type:'input',
        name:'email',
        message: questions[1] + '(Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ('Please enter your E-mail!')
                return false
            }
        }
    },
    {
        type:'input',
        name:'project name',
        message: questions[2]

    },
    {
        type:'input',
        name:'description',
        message: questions[3]
    },
    {
        type:'list',
        name:'licenses',
        message: questions[4],
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
        
    },
    {
        type:'input',
        name:'depedency',
        message: questions[5],
        default: 'npm i'
    },
    {
        type:'input',
        name:'tests',
        message: questions[6],
        default: 'npm test'
    },
    {
        type:'input',
        name:'know',
        message: questions[7],
    },
    {
        type:'input',
        name:'about',
        message:questions[8],
    },
    {
        type:'input',
        name:'contributing',
        message: questions[9]
    }   
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md')
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();

