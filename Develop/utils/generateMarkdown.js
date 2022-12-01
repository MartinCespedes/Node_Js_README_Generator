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
const generateMarkdown = (anwers) => {
  return `## :building_construction: ${anwers.title}

  ## :sunny: Motivation

  ${anwers.motivation}

  ## :grin: Project Motivation

  ${anwers.projectMotivation}

  ## :bug: What issues does it solve?

  ${anwers.resolve}

  ## :bulb: What did I learn?

  ${anwers.lesson}

   ## :page_facing_up: Description

  ${anwers.description}
  
  ## :bookmark_tabs: Table of Contents

  [Installation](##Installation)
  [Usage](##Usage)
  [Contribute](##Contribute)
  [Tests](##Tests)
  [Questions](##Questions)


   ## :open_file_folder: Installation

  ${anwers.installation}

  ##  :hammer_and_wrench: Usage

  ${anwers.usage}

  ## :moneybag: Contribute :moneybag:

  ${anwers.contribute}

  ## :writing_hand: Tests

  ${anwers.tests}

  ## :question: Questions

  - If you have any questions: :globe_with_meridians:[Link to Github](https://github.com${anwers.username})
  - Email contact info:  :incoming_envelope: [${anwers.email}]

  
  ## :white_check_mark: Licenses  

  ${anwers.license}

  ## :name_badge:  Badges

  ${anwers.badges}
  `;
};

module.exports = { generateMarkdown };
