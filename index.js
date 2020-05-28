const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        message: "What is your GitHub username?",
        name: "username",
        type: "input"
    },
    {
        message: "What is the email on your GitHub account?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the name of your project?",
        name: "title",
        type: "input"
    },
    {
        message: "Tell us a little about your project",
        name: "description",
        type: "input"
    },
    {
        message: "What is your project URL?",
        name: "url",
        type: "input"
    },
    {
        message: "What is required to run your project? Please provide a step-by-step description of how to get the dev environment running.",
        name: "installation",
        type: "input"
    },
    {
        message: "What are the instructions for use? Is there anything the user needs to know about using this repo?",
        name: "usage",
        type: "input"
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
        choices: ["a", "b", "c"]
    },
    {
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        type: "input",
        default: "npm i"
    },
    {
        message: "What command should be run to run tests?",
        name: "tests",
        type: "input",
        default: "npm test"
    }

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
        // console.log(data)
        // create text for file by passing data into the generateMarkdown function exported from generateMarkdown.js
        const text = generateMarkdown(data);
        // call writeToFile for a README with the text
        writeToFile("README.md", text);
    })
}

init();
