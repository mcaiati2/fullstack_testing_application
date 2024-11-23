# fullstack_testing_challenge
![License](https://img.shields.io/badge/License-MIT-blue.svg)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Description
With the scrips configured in this repository, you are able to run testing for the quiz app. This will allow you to make changes to your application and then quickly test your code with ease. Using this test, you can be sure that your latest changes do not cause any unexpected behavior with the quiz app!

## Installation
You must run npm i to install all necessary dependencies. This app uses dev dependencies:
    @types/react"
    "@vitejs/plugin-react"
    "concurrently"
    "cypress"
    "nodemon"
    "react"
    "react-dom"
    "react-router-dom"
    "typescript"
    "vitest"
    "wait-on"

## Usage
In your terminal, run the npm test command. This will automatically open Cypress, which will run through all of the configured end to end / component tests. Choose E2E if you'd like to run thgouh all of the configured test, and choose Component if you'd like to target the Quiz component specifically to test.

## Contributing
N/A

## Tests
npm test will perform the following actions:
"concurrently \"npm run start:dev\" \"wait-on tcp:3000 && cd ./client && npm run cypress:open\""

## Questions
Message me on GitHub! [mcaiati2](https://github.com/mcaiati2)

## License
This project is listed under the MIT [License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this software in accordance with the terms of the license. For more details, please refer to the LICENSE file in the repository.