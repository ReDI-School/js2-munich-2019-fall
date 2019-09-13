This repository contains the teaching material for Fall 2019 version of the ReDI School Munich course "JavaScript 2".

The teaching material is published at https://redi-school.github.io/js2-munich-2019-fall/.

The slides are implemented using [Spectacle](https://github.com/FormidableLabs/spectacle), which is a React-based library for creating presentations.

Each session is implemented as a separate NPM package as a subfolder to the folder `sessions`.

In order to avoid multiple copies of the `node_modules` folders, we maintain the slides using [Lerna](https://lerna.js.org/).

Lerna should be installed globally: `npm i -g lerna`

You should always run the `lerna` command in the root folder of the project.

Whenever dependencies change, you have to install the dependencies by running `lerna bootstrap --hoist` in the root folder of the project.

To show the slides, run `lerna run --scope "00*" start` (of course, replace `00*` by some other pattern which matches the name of the folder of the slides).

The slides will be published using the gh-pages feature of GitHub, where the `gh-pages` branch of this repository is used as a web site. In order to publish the slides for a session:

1. Build the distribution folder (`build`) in a session: `lerna run --scope "00*" build`
2. Deploy and push the distribution folder to the gh-pages branch: `lerna run --scope "00*" deploy`

Please note that this does not delete any files. Files no longer needed will have to be deleted manually.
