const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// this asks the user an array of questions 
const questions = [
    {
        type: "input",
        message: "Title:",
        name: "What is the title of this Project?"
    },
    {
        type: "input",
        message: "Description of Project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions for Application:",
        name: "install",
    },
    {
        type: "input",
        message: "Instructions on how to use Application:",
        name: "usage"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "BSD"]
    },
    {
        type: "input",
        message: "Test Instructins for Application:",
        name: "test",
    },
    {
        type: "input",
        message: "Contribution Guidelines for Application:",
        name: "contributions"
    },
    
    {
        type: "input",
        message: "GitHub Username:",
        name: "username"
    },
    {
        type: "input",
        message: "Email Address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, createFile) {
    fs.writeFile(fileName, createFile, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Your README has been created!");
    });
}

// function to initialize program
async function init() {
    try {
        const getAnswers = await inquirer.prompt(questions);
        const fileName = await getAnswers.title.toLowerCase().split(' ').join('') + "_README.md";
        const createFile = await generateMarkdown(getAnswers);
        const writefile = await writeToFile(fileName, createFile);
    } catch (error) {
        console.log(error);
    }
}
init();
