// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "NONE") {
    badge = "![License Badge](https://shields.io/badge/license-" + license;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
