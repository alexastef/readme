function generateMarkdown(data) {
  return `# ${data.title}  

[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)



## Description
${data.description}  

[Demo here!](${data.demo})

***

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)
* [Contributing](#contributing)  
* [Tests](#tests)  
* [Questions?](#questions)  

***

## Installation  
 
    ${data.install}  

***

## Usage  
${data.usage}  

To start application, run ${data.usageCommand}:  
 
    ${data.usageCommand}  
 

***

## Tests  

    ${data.tests}

***


## Author
![user photo](https://avatars.githubusercontent.com/${data.username}?size=100)
- GitHub: [${data.username}](https://github.com/${data.username})  
- Portfolio: [${data.portfolio}](${data.portfolio})

Any questions? Contact me at ${data.email}

## Contributing  
${data.contributing} 

*** 

## License  
${data.license}  

`;
}

module.exports = generateMarkdown;
