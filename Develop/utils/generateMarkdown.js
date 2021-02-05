// TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");
let mit= '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'


// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (licenses==='MIT') {
    return mit;
  }
  renderLicenseSection();
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses === 'MIT') {
    return;
  } else if (licenses === 'Apache'){
    return 
  } else if (licenses=== 'GPL'){
    return;
  }else if (licenses === 'BSD'){
    return;
  } else if (licenses===null){
    return '';
  }
  
  renderLicenseBadge();
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (mit===true) {
    mit = "## Badge"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${mit}

 ##  Description
 ${data.description}
 ---
 ## Table of Contents
 - [Installation](#installation)
 -[Usage](#usage)
 -[License](#license)
 -[Contributing](#contributing)
 -[Tests](#tests)
 -[Questions](#questions)
 ---
 ## Installation
 ${data.dependency}
 --
 ## Usage
 ${data.know}
 ## License
 This project is licensed under the terms of ${data.licenses}
 license.
 --
 ## Contributing
 Run ${data.about}
 --
 ## Tests
 Run ${data.tests} to run tests.
 --
 ## Questions
 If you have any questions about this repo, contact ${data.github}/${data.title}

`
}
renderLicenseLink();
module.exports = generateMarkdown;
