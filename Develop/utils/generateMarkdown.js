function generateMarkdown(data) {
  return `# ${data.title}  

***
![GitHub license](https://img.shields.io/badge/license-GPL.3.0-blue.svg)

### Description
${data.description}  

***

### Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)
* [Contributing](#contributing)  
* [Tests](#tests)  
* [Questions?](#questions)  

***

### Installation  
${data.installation}  

***

### Usage  
${data.usage}  

*** 

### License  
${data.license}  

***

### Contributing  
${data.contributing}  

***

### Tests  
${data.tests}

`;
}

module.exports = generateMarkdown;
