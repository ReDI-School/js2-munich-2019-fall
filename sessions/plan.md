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

Perhaps this refactoring could be a good way to introduce Jest snapshot tests. So we can automatically test whether we get some errors due to the refactoring. The students do not need to understand what is going on in depth, but should get the idea that testing can be automatized. We could just give them a pre-build snapshot test case.

# 05-data

complex JS data structures, map, arrow functions, compute price

# 06-modules

split project into files, import, export
webpack: bundle built from all files

use libraries like lodash and classnames
package.json: dependencies

# 07-state

state: useState hook
making recipe scalable: enter number of persons, re-compute ingredients, compute price

# 08-fetch

data fetching: fetch recipe data from backend using GET
JSON
fetch API
async/await
effects: useEffect hook
intro into Chrome DevTools' network console
how to mock fetch API for tests

# next sessions

multiple recipes (not sure whether this makes sense)

    const recipes = [kaiserschmarrn, lasagne, ...];
    or
    const recipes = { kaiserschmarrn, lasagne, ... };

    Extend the app such that a recipe can be selected using a URL query parameter

    This session should again train the use of data structure, map, teach the location API.

    Furthermore, when taking recipes from all participants, we have to think about
    - data structures
    - team work


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
    API catalogs
        https://rapidapi.com/collection/food-apis
        https://www.programmableweb.com/category/food

    some APIs:
        https://spoonacular.com/food-api    REST API with 150 API calls / day free. Data structures seem very good.
        https://www.themealdb.com/api.php   REST API with free developer key
        https://developers.whisk.com/   Graph-API (not GraphQL), does not seem to be free

    Formats
        http://microformats.org/wiki/hrecipe (microformat)
        https://schema.org/Recipe

introduce HTTP/REST
use Postman for requests
look at data structures provided by this API
change/extend existing code appropriately


automatic testing
- unit tests
- snapshot tests (it would make sense to have those tests when refactoring the static page)
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
