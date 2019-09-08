import React from 'react';
import { Code, Deck, Heading, Image, Layout, List, ListItem, Slide, Text } from 'spectacle';
import Terminal from "spectacle-terminal";
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#5BAEC5',
    tertiary: '#F15922',
    quaternary: '#CECECE',
  },
  {
    primary: 'avenir-lt-w01_85-heavy1475544, sans-serif',
    secondary: 'Helvetica',
  }
);

export default () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
    contentHeight={800}
    contentWidth={1600}
  >
    <Slide>
      <Image
        src="redi-school-logo.webp"
        height="50px"
      />
      <Heading style={{margin: '50px'}} size={1} caps>
        ReDI Munich JavaScript 2 Course
      </Heading>
      <Heading style={{margin: '50px'}} size={2}>
        My First React App
      </Heading>
      <Heading style={{margin: '50px'}} size={3}>
        2019-10-xx
      </Heading>
    </Slide>
    <Slide bgImage="cookbook-746005_960_720.jpg">
      <Heading bgColor="white" size={1} fit>
        Sample Course Project: Cookbook Site
      </Heading>
    </Slide>
    <Slide>
      <Text>
        As a common theme for all exercises and homeworks,
        we will create a web site during the course which presents cooking recipes.
      </Text>
      <Text>
        There are several such sites in the internet.
        Some of them even expose an API for their recipe data which we can use later during the course.
      </Text>
      <Image />
      {/* TODO show screenshots of some recipe sites like yummly, allrecipes, chefkoch, ... */}
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Creating a React App using create-react-app
      </Heading>
      <Text>Open a shell (git bash) and type <Code>npx create-react-app my-cookbook</Code></Text>
      <Terminal title="~(git bash)" output={[
        `tg@LAPTOP MINGW64 ~/redi
$ npx create-react-app my-cookbook`,
`        
Creating a new React app in C:\\Users\\tg\\redi\\my-cookbook.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> core-js@2.6.9 postinstall C:\\Users\\tg\\redi\\my-cookbook\\node_modules\\babel-runtime\\node_modules\\core-js
> node scripts/postinstall || echo "ignore"


> core-js@3.1.4 postinstall C:\Users\\tg\\redi\\my-cookbook\\node_modules\\core-js
> node scripts/postinstall || echo "ignore"

+ react-scripts@3.1.1
+ react-dom@16.9.0
+ react@16.9.0
added 1444 packages from 685 contributors in 85.316s
[+] no known vulnerabilities found [905233 packages audited]


Initialized a git repository.

Success! Created my-cookbook at C:\\Users\\tg\\redi\\my-cookbook
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-cookbook
  npm start

Happy hacking!

tg@LAPTOP MINGW64 ~/redi
$ `,
        ]}
      />
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Starting the Development Server for the App
      </Heading>
      <Text>In git bash, type <Code>cd my-cookbook</Code> to navigate to the newly created folder.</Text>
      <Text>Type <Code>npm start</Code> to start the development server.</Text>
      <Terminal title="~(git bash)" output={[
        `tg@LAPTOP MINGW64 ~/redi
$ cd my-cookbook`,
`tg@LAPTOP MINGW64 ~/redi/my-cookbook (master)
$ npm run start`,
        `
> my-cookbook@0.1.0 start C:\\Users\\tg\\redi\\my-cookbook
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view my-cookbook in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.56.1:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
`
          ]}
      />
    </Slide>
    <Slide>
      <Heading size={2}>
        Accessing the App
      </Heading>
      <Text>If no new browser tab opens, open http://localhost:3000/ in your browser.</Text>
      <Text>Hooray! You will now see your first React app in your browser:</Text>
      <Image src="browser.png"/>
    </Slide>
    <Slide>
      <Heading size={2}>
        Editing the App
      </Heading>
      <Text>Start Visual Studio Code and open the folder <Code>my-cookbook</Code>.</Text>
      <Text>Open the file <Code>src/App.js</Code>.</Text>
      <Image src="vs-code.png"/>
    </Slide>
    <Slide>
      <Heading size={2}>
        Modifying the App
      </Heading>
      <Text>Open the file <Code>src/App.js</Code>, modify some text, and save it.</Text>
      <Text>The browser reloads the page and shows the modified app.</Text>
      <Layout>
        <Image src="vs-code-change-ok.png"/>
        <Image src="browser-change-ok.png"/>
      </Layout>
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Modifying the App - Errors
      </Heading>
      <Text>In case you make an error, an error message is shown:</Text>
      <Layout>
        <Image src="vs-code-change-error.png"/>
        <Image src="browser-change-error.png"/>
      </Layout>
      <Text>In addition, you can see the error message in the console where you entered <Code>npm run start</Code>.</Text>
    </Slide>
    <Slide>
      <Heading size={2} fit>
        What do all the Created Files Mean?
      </Heading>
      <Text>TODO: show all relevant files and add explanations</Text>
    </Slide>
    <Slide bgImage="board-928381_960_720.jpg" />
    <Slide>
      <Heading size={2}>
        HTML and CSS in React Apps
      </Heading>
      <List>
        <ListItem>Search for a cooking recipe of your favorite dish.</ListItem>
        <ListItem>[optional] Cook this dish and take photos of the important steps and the final result.</ListItem>
        <ListItem>Edit the file App.js. Add some HTML inside the render method which describes your cooking recipe.</ListItem>
        <ListItem>
          Use some images and add some styling to make the recipe look nice.
          You can either add your styles to the CSS file or directly use style attributes.
        </ListItem>
      </List>
    </Slide>
  </Deck>
);
