function renderLicenseBadge(license) {
    switch(license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        case 'GPL 3.0':
            return '![License: APACHE 2.0](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        case 'APACHE 2.0':
            return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
        case 'BSD 3':
            return '![License: APACHE 2.0](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
        case 'N/A':
            return ''
    }
}

function renderLicenseLink(license) {
    switch(license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT'
        case 'GPL 3.0':
            return 'https://www.gnu.org/licenses/gpl-3.0'
        case 'APACHE 2.0':
            return 'https://opensource.org/licenses/Apache-2.0'
        case 'BSD 3':
            return 'https://opensource.org/licenses/BSD-3-Clause'
        case 'N/A':
            return ''
    }
}

function renderLicenseSection(license) {
    switch(license) {
        case 'MIT':
            return `${renderLicenseBadge(license)}
            ${renderLicenseLink(license)}`
        case 'GPL 3.0':
            return `${renderLicenseBadge(license)}
            ${renderLicenseLink(license)}`
        case 'APACHE 2.0':
            return `${renderLicenseBadge(license)}
            ${renderLicenseLink(license)}`
        case 'BSD 3':
            return `${renderLicenseBadge(license)}
            ${renderLicenseLink(license)}`
        case 'N/A':
            return ''       
    }
}

function generateMarkdown(responses) {
    return `# ${responses.title}
    ${renderLicenseSection(responses.license[0])}
    
    ## Description
    ${responses.description}

    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Tests](#Test)
    * [Questions](#Questions)    
    * [License](#License)

    ## Installation
    Run the following command to install all necessary dependencies:
    \`\`\`
    ${responses.installation}
    \`\`\`

    ## Usage
    ${repsonses.usage}

    ## Contributing
    ${responses.contribution}

    ## Tests
    Run the following command to run tests:
    \`\`\`
    ${responses.test}
    \`\`\`

    ## Questions
    If you have any questions about the repo, please contact me at ${reponses.email}. If you would like to see more of my work, please go to ![${respones.username}](https://github.com/${respones.userename}).

    ## License
    This project is licensed under the ${respones.license} license.
    `;
}

module.exports = generateMarkdown;