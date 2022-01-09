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