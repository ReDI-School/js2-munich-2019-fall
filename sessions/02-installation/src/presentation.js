import React from 'react';
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
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
        Installation Session
      </Heading>
      <Heading style={{margin: '50px'}} size={3}>
        2019-09-xx
      </Heading>
    </Slide>
    <Slide bgImage="tools-1209764_960_720.jpg">
      <Heading size={1} caps fit>
        Development Environment
      </Heading>
    </Slide>
    <Slide>
      <Text>Goal: set up a common development environment for the course</Text>
      <Text>Basic tools:</Text>
      <List>
        <ListItem>Browser: Chrome</ListItem>
        <ListItem>Editor: Visual Studio Code + Plugins</ListItem>
        <ListItem>Package Manager: NPM + Node.js</ListItem>
        <ListItem>Version-Control System: Git</ListItem>
      </List>
      <Text>common tools: simplifies support for the teaching team</Text>
    </Slide>
    <Slide bgImage="browser-773215_960_720.png">
      <Heading bgColor="white" margin={50} size={1}>
        Browser
      </Heading>
    </Slide>
    <Slide>
      <Text>
        What is a browser?

        What else? Debugger, development environment, platform (plugins)
      </Text>
      <Text>
        Currently, there are several major browsers on the market:
      </Text>
      <List>
        <ListItem>Chrome from Google</ListItem>
        <ListItem>Firefox from Mozilla.org</ListItem>
        <ListItem>Safari from Apple</ListItem>
        <ListItem>Edge from Microsoft</ListItem>
      </List>
      <Text>Chrome and Firefox are the only ones running on all major operating systems (Windows, Linux, MacOS).</Text>
      <Text>We will use Chrome during this course, as it provides the best development tools and we are most familar with it.</Text>
    </Slide>
    <Slide>
      <Text>
        Download Chrome from https://www.google.com/chrome/browser/desktop/index.html
      </Text>
    </Slide>
    <Slide>
      Chrome has some extensions, which are useful for development during this course.

      React Developer Tools
      React Sight

      later probably the following plugins make sense:
      Redux Developer Tools
      Apollo Client Developer Tools
    </Slide>
    <Slide>
      example: go to www.redi-school.org and look at page with Chrome DevTools
      - elements
      - sources
      - console
      - network
      - components
    </Slide>
    <Slide bgImage="Abstract_monitor_with_IDE.png">
      <Heading bgColor="white" margin={50} size={1}>
        Editor
      </Heading>
    </Slide>
    <Slide>
      <Text>
        What is an editor?

        What else? plugins (version control, languages, ...)
      </Text>
      <Text>
        For Web development, there are several free and commercial editors / IDEs on the market.
      </Text>
      <List>
        <ListItem>Visual Studio Code from Microsoft (free)</ListItem>
        <ListItem>Atom from GitHub (free)</ListItem>
        <ListItem>WebStorm from JetBrains (commercial)</ListItem>
      </List>
      <Text>We will use Visual Studio Code in this course, because it supports JavaScript and React very well and we use it in our daily jobs.</Text>
    </Slide>
    <Slide>
      <Text>
        Download Visual Studio Code from ...
      </Text>
    </Slide>
    <Slide>
      Visual Studio Code has some extensions, which are useful for development during this course.

      Bracket Pair Colorizer 2
      GitLens
      ESLint
      Prettier
    </Slide>
    <Slide bgImage="parcel-2484036_960_720.png">
      <Heading size={1}>
        Package Manager
      </Heading>
    </Slide>
    <Slide>
      <Text>
        What is a package manager?

        NPM, node.js

        What is node.js

        What else?

        Other package managers: yarn

        lerna: manage multiple packages at once
      </Text>
    </Slide>
    <Slide>
      <Text>
        Download node.js from ...
      </Text>
    </Slide>
    <Slide bgImage="Branchs.jpg">
      <Heading bgColor="white" margin={50} size={1}>
        Version Control System
      </Heading>
    </Slide>
    <Slide>
      <Text>
        What is git?

        What else? git bash which provides a Unix-like shell.

        GitHub

        get an account for GitHub?

        (Other version control systems are SVN, Perforce, Visual Source Safe, ...)

        We use git, since it is free, a distributed system, and most common in frontend development community.
      </Text>
    </Slide>
    <Slide>
      <Text>
        Download git from ...
      </Text>
    </Slide>
    <Slide>
      <Text>
        All-over exercises: (internet access required)
        - clone slides from redi github repo
        - install the following packages using npm package manager: npm i -g lerna
        - start today's slides in the browser: lerna --scope 02* run start
        - open the root of the slide's tree in VS Code
        - navigate to today's slide file
      </Text>
    </Slide>
    <Slide>
      <Heading>
        Attributions
      </Heading>
      <Text>... sources of the used images</Text>
    </Slide>

  </Deck>
);
