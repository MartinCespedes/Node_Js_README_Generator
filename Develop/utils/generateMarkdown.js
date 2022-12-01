// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Created function to generate markdown for README
const generateMarkdown = (data) => {
  return `## ${data.title}

  ## Motivation

  ${data.motivation}

  ## Project Motivation

  ${data.projectMotivation}

  ## What issues does it solve?

  ${data.resolve}

  ## What did I learn?

  ${data.lesson}

   ## Description

  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)


   ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribute

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

    - If you have any questions:

  
  ## Licenses  

  ${data.license}

  ## Badges

  ${data.badges}


  ${data.username}


  ${data.email}


  `;
};

module.exports = { generateMarkdown };
