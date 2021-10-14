// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Type a description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "Type instructions on how to install the project",
    name: "Installation",
  },
  {
    type: "input",
    message: "How do you use this project?",
    name: "Usage",
  },
  {
    type: "checkbox",
    message: "Please choose a license.",
    choices: ["Apache", "GNU", "MIT"],
    name: "License",
  },
  {
    type: "input",
    message: "Who contributed to the project?",
    name: "Contribution",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "Test",
  },
  {
    type: "input",
    message: "Enter your Github Username.",
    name: "UserName",
  },
  {
    type: "input",
    message: "Enter an email address.",
    name: "Email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Your README has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}
// Function call to initialize app
init();
