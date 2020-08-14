// function to generate markdown for README
const generateMarkdown = (response) => {
    return `# ${response.name}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Description
  ${response.description}
  ## Installation 
  ${response.installation}
  ## Usage
  ${response.usage}
  ## License
  ${licenseBadge}
  ## Contributing
  ${response.contributing}
  ## Tests
  ${response.tests}
  ## Questions 
  ### If you have any questions please contact me at:
  Email: ${response.email}
  Github: https://github.com/${response.github}
  `
  ;
  }
  
  module.exports = generateMarkdown;