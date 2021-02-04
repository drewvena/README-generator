// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ('MIT') ![License]('https://img.shields.io/badge/license-MIT-blue.svg');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return ;
  } else if (license === 'Apache'){
    return;
  } else if (license === 'GPL'){
    return;
  }else if (license === 'BSD'){
    return;
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


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

`}
renderLicenseLink();

module.exports = generateMarkdown;
