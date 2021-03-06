// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

const {renderLicenseLink,generateMarkdown} = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?(Required)',
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
    message: 'What is your email address',

},
{
    type:'input',
    name:'title',
    message: "What is your project's name"

},  
{
    type:'input',
    name:'description',
    message:'Please write a short description of your project'
},  
{
    type:'list',
    name:'licenses',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'Apache', 'GPL v2', 'GPL v3','MPL 2.0',]
    
},  
{
    type:'input',
    name:'dependency',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
},   
{
    type:'input',
    name:'tests',
    message: 'What command should be run to run tests?' ,
    default: 'npm test'
},   
{
    type:'input',
    name:'know',
    message: 'What does the user need to know about using the repo?',
} ,   
 {
    type:'input',
    name:'about',
    message:'What does the user need to know about contributing to the repo?' 
},];



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log (err);

        }else{
            console.log('Your README.md has been created!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data =>{
       return renderLicenseLink(data);
    })
    .then(data => {
    writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();

