
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answersObject) {
  if (answersObject.licenses==='MIT') {
   answersObject.badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  } else if (answersObject.licenses === 'Apache'){
    answersObject.badge='![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  } else if (licenses=== 'GPL v2'){
   answersObject.badge='![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }else if (licenses === 'GPL v3'){
    answersObject.badge='![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (licenses==='MPL 2.0'){
    answersObject.badge= '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)'
  } else if (licenses===null){
    answersObject.badge = ' '
  }
  return answersObject
  
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${data.badge}

 ##  Description
 ### ${data.description}
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
 ###### ${data.dependency}
 --
 ## Usage
 ###### ${data.know}
 --
 ## License
 ###### This project is licensed under the terms of ${data.licenses}
 ###### license.
 --
 ## Contributing
  ###### ${data.about}
 --
 ## Tests
 ###### Run ${data.tests} to run tests.
 --
 ## Questions
 ###### If you have any questions about this repo, contact ${'https://github.com/' + data.github}/${data.title}
 --
 ## Email
 ###### ${data.email}

`
}


module.exports = {generateMarkdown, renderLicenseLink};
