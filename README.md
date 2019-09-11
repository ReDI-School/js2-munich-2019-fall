[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

npm i -g lerna

lerna bootstrap --hoist

to show the slides
lerna run --scope 00 start

to build the dist folders
lerna run --scope 00* build

to deploy the dist folders to the gh-pages branch
lerna run --scope 00* deploy

git push to push the gh-pages branch to github