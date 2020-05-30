const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        message: "What is your GitHub username?",
        name: "username",
        type: "input"
    },
    {
        message: "What is your GitHub email address?",
        name: "email",
        type: "input"
    },
    {
        message: "If you'd like to link to your portfolio, please provide the URL.",
        name: "portfolio",
        type: "input"
    },
    {
        message: "What is the name of your project?",
        name: "title",
        type: "input"
    },
    {
        message: "Tell us a little about your project.",
        name: "description",
        type: "input"
    },
    {
        message: "What is your project URL?",
        name: "demo",
        type: "input"
    },
    {
        message: "What command should be run to install dependencies?",
        name: "install",
        type: "input",
        default: "npm i"
    },
    {
        message: "What are the instructions for use? Is there anything the user needs to know about using this repo, including prerequisites?",
        name: "usage",
        type: "input"
    },
    {
        message: "What command should be run to start application?",
        name: "usageCommand",
        type: "input",
        default: "npm start"
    },
    {
        message: "What command should be run to run tests?",
        name: "tests",
        type: "input",
        default: "npm test"
    },
    {
        message: "Would you like other developers to contribute to this project? If so, what are the guidelines for doing so?",
        name: "contributing",
        type: "input"
    },
    {
        message: "What type of license does your project have?",
        name: "license",
        type: "list",
        choices: ["MIT", "LGPL-3.0", "MPL-2.0", "AGPL-3.0", "APACHE-2.0", "None"]
    },

];

// function to write the file with filename and data from user prompt
function writeToFile(fileName, data) {
    // write file function with error catch
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    })  
}

// init function prompting user with questions above
function init(){
    inquirer.prompt(questions).then((data) => {
        // create text for file by passing data into the generateMarkdown function exported from generateMarkdown.js
        const text = generateMarkdown(data);        
        // call writeToFile for a README with the text
        writeToFile("README.md", text);
    })
}

init();
