// Import fs library to read/write files.
const fs = require("fs");
// Import inquirer library
const inquirer = require("inquirer");

let generateMD = () => {
// Questions the program will be asking:
  inquirer
    .prompt([
      {
        type: "input",
        message: "Give a title for your project:",
        name: "title",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please do not leave this blank.");
            false;
          }
        }
      },
      {
        type: "input",
        message: "Write a description for your project: ",
        name: "description"
      },
      {
        type: "input",
        message: "Provide any installation instructions: ",
        name: "instructions",
      },
      {
        type: "input",
        message: "What does the user need to know in order to use the repository? ",
        name: "usage"
      },
      {
        type: "list",
        message: "Choose what license your project will use:",
        name: "license",
        choices: [
          "APACHE 2.0", 
          "Boost 1.0", 
          "BSD 3-Clause", 
          "Creative Commons A4.0", 
          "GNU GPL v3", 
          "MIT", 
          "MPL 2.0", 
          "No License"
        ]
      },
      {
        type: "input",
        message: "What does the user need to know about repository contribution? ",
        name: "contributing"
      },
      {
        type: "input",
        message: "Write down any tests that the user could do for the program:",
        name: "test"
      },
      {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "github"
      },
      {
        type: "input",
        message: "Enter your Email address: ",
        name: "email"
      }
    ])
    .then((answer) =>
      fs.writeFile("./result/generated_README.md", readMeContent(answer), (err) =>
      err ? console.error(err) : console.log("Success! README.md created.")
      )
    );
}

let getLicenseIcon = (license) => {
  switch (license) {
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons A4.0":
      return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "MPL 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    default:
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
}

// initialize script
generateMD();