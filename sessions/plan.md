# 00-orientation

# 01-js1-summary

repeat all topics covered in JS1 course (+ optionally, HTML/CSS course)

# 02-installation

install Chrome, VS Code, node.js and git

obtain a github account

# 03-first-react-app

use create-react-app, add HTML/CSS to app

first steps with git, push code to github

publishing the app

# 04-components

create first functional components, props, JSX

# 05-data

complex JS data structures, map, arrow functions

# 06-multiple-recipes

const recipes = [kaiserschmarrn, lasagne, ...];
or
const recipes = { kaiserschmarrn, lasagne, ... };

Extend the app such that a recipe can be selected using a URL query parameter

This session should again train the use of data structure, map, teach the location API.

Furthermore, when taking recipes from all participants, we have to think about
- data structures
- team work

# 07-modules

split project into files, import, export
webpack: bundle built from  all files

use libraries like lodash
package.json: dependencies

# next sessions

state: useState hook
making recipe scalable: enter number of persons, re-compute ingredients, compute price


UI library: use material-ui
use components from material-ui to improve the UI of the cookbook


navigation design: introduce more pages
- recipe-details page (we already created this page)
- recipe search page
- recipe search-results page
implement those pages using material-ui
(search should do some simple in-memory search on the recipes data structure)


introduce react-router


survey available recipe APIs
introduce HTTP/REST
use Postman for requests
look at data structures provided by this API
change/extend existing code appropriately


promises, async/await
axios?
effects: useEffect hook
data fetching: fetch recipe data from backend REST API
intro into Chrome DevTools' network console



automatic testing
- unit tests
- snapshot tests
- e2e testing with Cyprus (perhaps session by Anna from JS1)


# unsorted

use GraphQL API (there are/is some for recipes)

use react-intl for internationalization
perhaps also do some bidi UI for Arabic language if Arab-language speakers are present

create own recipe backend with node.js/express/MongoDB or similar

extend recipe site by shopping basket (like Yummly)
    idea: collect items from recipes which have to be bought in order to cook them
    store shopping basket in local storage
    manage shopping basket with own microservice

recipe editor
