[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Install lerna: `npm i -g lerna`

Install dependencies: `lerna bootstrap --hoist`

Show the slides: `lerna run --scope "00*" start`

Publish the slides:

1. Build the dist folders: `lerna run --scope "00*" build`
2. Deploy and push the dist folders to the gh-pages branch: `lerna run --scope "00*" deploy`