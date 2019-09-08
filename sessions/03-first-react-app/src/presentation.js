import React from 'react';
import { Code, Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
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
      <Terminal title="~(bash)" output={[
        "$ npx create-react-app my-cookbook",
        ]}
      />
    </Slide>
    <Slide>
      <Heading size={2}>
        Resulting Folder Structure
      </Heading>
      <Image />
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Starting the Development Server for the App
      </Heading>
      <Text>In git bash, type <Code>cd my-cookbook</Code> to navigate to the newly created folder.</Text>
      <Text>Type <Code>npm start</Code> to start the development server.</Text>
      <Terminal title="~(bash)" output={[
        "$ npm start",
        ]}
      />
    </Slide>
    <Slide>
      <Heading size={2}>
        Accessing the App
      </Heading>
      <Text>If no new browser tab opens, open http://localhost:3000/ in your browser.</Text>
      <Text>Hooray! You will now see your first React app in your browser:</Text>
      <Image />
    </Slide>
    <Slide>
      <Heading size={2}>
        Editing the App
      </Heading>
      <Text>Start Visual Studio Code and open the folder <Code>my-cookbook</Code>.</Text>
      <Image />
    </Slide>
    <Slide>
      <Heading size={2}>
        Modifying the App
      </Heading>
      <Text>Open the file <Code>src/App.js</Code>, modify some text, and save it.</Text>
      <Text>The browser reloads the page and shows the modified app.</Text>
      <Image />
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Modifying the App - Errors
      </Heading>
      <Text>In case you make an error, an error message is shown:</Text>
      <Image />
    </Slide>
    <Slide>
      <Heading size={2} fit>
        What do all the Created Files Mean?
      </Heading>
      <Image />
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
