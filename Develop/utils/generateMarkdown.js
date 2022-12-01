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
  return `## :building_construction: ${data.title}

  ## :sunny: Motivation

  ${data.motivation}

  ## :grin: Project Motivation

  ${data.projectMotivation}

  ## :bug: What issues does it solve?

  ${data.resolve}

  ## :bulb: What did I learn?

  ${data.lesson}

   ## :page_facing_up: Description

  ${data.description}
  
  ## :bookmark_tabs: Table of Contents

  [Installation](##Installation)
  [Usage](##Ssage)
  [Contribute](##Contribute)
  [Tests](##Tests)
  [Questions](##Questions)


   ## :open_file_folder: Installation

  ${data.installation}

  ##  :hammer_and_wrench: Usage

  ${data.usage}

  ## :moneybag: Contribute :moneybag:

  ${data.contribute}

  ## :writing_hand: Tests

  ${data.tests}

  ## :question: Questions

  If you have any questions: :globe_with_meridians:[Link to Github](https://github.com${data.username})
  Email contact info:  :incoming_envelope: [${data.email}]

  
  ## :white_check_mark: Licenses  

  ${data.license}

  ## :name_badge:  Badges

  ${data.badges}
  `;
};

module.exports = { generateMarkdown };
