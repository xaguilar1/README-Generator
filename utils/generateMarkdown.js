// function to generate markdown for README
const generateMarkdown = (response) => {
    return `# ${response.title}
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
  ${response.license}
  ## Contributing
  ${response.contributions}
  ## Tests
  ${response.tests}
  ## Questions 
  ### Got Questions? Contact me here at:
  Email: ${response.email}

  Github: https://github.com/${response.username}
  `
  ;
  }
  
  module.exports = generateMarkdown;