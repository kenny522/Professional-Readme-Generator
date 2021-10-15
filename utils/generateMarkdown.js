// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.Title}


 ## Description
 ${data.Description}
  ## **Table of Contents**

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseLink(data.License)}
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Email](#Email)
  
  
  ### **Installation**

  ${data.Installation}

  ### **Usage**

  This application is used for ${data.Usage}

  ### **License**
  ${renderLicenseBadge(data.License)}
  ${renderLicenseSection(data.license)}

  ### **Contributing**

  ${data.Contribution}

  ### **Test** 

  ${data.Test}

  ### **Email**
  
  ${data.Email}

  ## Github

  [GitHub Profile](https://github.com/${data.UserName})

`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `* [License](##license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License
    This project is licensed under the ${license}.`;
  }
}

module.exports = generateMarkdown;
