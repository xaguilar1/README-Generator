const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// this asks the user an array of questions 
async function userInput () { 
    return inquirer.prompt([
    {
        type: "input",
        message: "Title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Description of Project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions for Application:",
        name: "installation",
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
        choices: ["MIT", "APACHE 2.0"]
    },
    {
        type: "input",
        message: "Contribution Guidelines for Application:",
        name: "contributions"
    },
    {
        type: "input",
        message: "Test Instructins for Application:",
        name: "tests",
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
    
])
};

userInput()
//function for badges 
.then(function(response) {
    if(response.license = "[![MIT](https://img.shields.io/badge/NPM-MIT-green.svg)](https://opensource.org/licenses/MIT)")
    if(response.license = "[![Apache](https://img.shields.io/badge/NPM-Apache-green.svg)](https://opensource.org/licenses/Apache-2.0)")
    console.log(response)
    

    //writes to README
        fs.writeFile("README.md", generateMarkdown(response), "utf8", function (err) {

            if (err) {
                console.log(err)
            } else {
                console.log("Your README was created !")
            }

        })
});
