[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Install lerna: `npm i -g lerna`

Install dependencies: `lerna bootstrap --hoist`

Show the slides: `lerna run --scope "00*" start`

Build the dist folders: `lerna run --scope "00*" build`

Deploy the dist folders to the gh-pages branch:
`lerna run --scope "00*" deploy`

`git push` to push the gh-pages branch to github
