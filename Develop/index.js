//Packages needed for this application//
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

//An array of questions for user input//
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your desired title for the project?",
    //Project title//
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
    //Motivation for developing//
  },
  {
    type: "input",
    name: "projectMotivation",
    message: "Why did you build this project?",
    //Project motivation//
  },
  {
    type: "input",
    name: "description",
    message: "Pleave write a description about your project.",
    //Provide information about your project//
  },
  {
    type: "input",
    name: "resolve",
    message: "What issues does it resolve?",
    //What problem does it solve?//
  },
  {
    type: "input",
    name: "lesson",
    message: "What was your most valuable lesson?",
    //What did I learn?//
  },
  {
    type: "input",
    name: "installation",
    message: "Write steps on how to install your project. ",
    //Installation intructions//
  },
  {
    type: "input",
    name: "usage",
    message: "How would you like the project to be used?",
    //Usage Information//
  },
  {
    type: "input",
    name: "contribute",
    message:
      "Please provide guidelines on how others can contribute to your project.",
    //Contributions guidelines//
  },
  {
    type: "input",
    name: "tests",
    message:
      "Write tests if any, for your project with examples on how to run them.",
    //Test intructions//
  },
  {
    type: "list",
    name: "license",
    message: "Select a license from these options:",
    choices: [
      "None",
      "Apache",
      "Boost",
      "BSD",
      "Creative Commons",
      "Eclipse",
      "GNU",
      "The Organization for Ethical Source",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "Open Data Commons",
      "Perl",
      "SIL",
      "Unlicense",
      "WTFPL",
      "Zlib",
    ],
    //License information//
  },
  {
    type: "input",
    name: "badges",
    message: "What is your Badge?",
    //Badges for street cred//
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    //Github username information//
  },
  {
    type: "input",
    name: "email",
    message: "Last question: What is your email address?",
    //Email information//
  },
];

//Function to write README file//
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, generateMarkdown(answers), (err) =>
    err
      ? console.log(err)
      : console.log(
          `${answers.title}` + " README.md was successfully created!!!!"
        )
  );
}

//Function to initialize app//
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

//Function call to initialize app//
init();
