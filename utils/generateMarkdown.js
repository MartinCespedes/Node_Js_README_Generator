//Function that returns a license badge based on which license is passed in//
//If there is no license, return an empty string//
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "NONE") {
    badge = "![License Badge](https://shields.io/badge/license-)" + license;
  }

  return badge;
}

//Function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;

    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;

    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "Creative Commons":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;

    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;

    case "GNU":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "The Organization for Ethical Source":
      licenseLink = "https://firstdonoharm.dev";
      break;

    case "IBM":
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      break;

    case "ISC":
      licenseLink = "https://opensource.org/licenses/ISC";
      break;

    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;

    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;

    case "Open Data Commons":
      licenseLink = "https://opendatacommons.org/licenses/by/";
      break;

    case "Perl":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;

    case "SIL":
      licenseLink = "https://opensource.org/licenses/OFL-1.1";
      break;

    case "Unlicense":
      licenseLink = "http://unlicense.org/";
      break;

    case "WTFPL":
      licenseLink = "http://www.wtfpl.net/about/";
      break;

    case "Zlib":
      licenseLink = "https://opensource.org/licenses/Zlib";
      break;

    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

//Function that returns the license section of README//
//If there is no license, return an empty string//
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "NONE") {
    licenseSection += "## License\n";
    licenseSection +=
      "See" +
      renderLicenseLink(license) +
      " to get detailed information about this license\n";
  }

  return licenseSection;
}

//Created function to generate markdown for README
const generateMarkdown = (answers) => {
  return `## ${answers.title}

  ## Motivation

  ${answers.motivation}

  ## Project Motivation

  ${answers.projectMotivation}

  ## What issues does it solve?

  ${answers.resolve}

  ## What did I learn?

  ${answers.lesson}

  ## Description

  ${answers.description}
  
  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [Contribute](#contribute)

  [Tests](#tests)

  [Questions](#questions)

  ${renderLicenseSection(
    answers.license
  )}  // Add this line to include the license section

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Contribute

  ${answers.contribute}

  ## Tests

  ${answers.tests}

  ## Questions

  - If you have any questions:[Link to Github](https://github.com${
    answers.username
  })
  - Email contact info:[${answers.email}]

  
  ## Licenses  

  ${answers.license}

  ## Badges

  ${answers.badges}
  
  ${renderLicenseBadge(answers.license)}
  `;
};

module.exports = { generateMarkdown };
