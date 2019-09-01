// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Image
            src="redi-school-logo.webp"
            height="50px"
          />
          <Heading style={{margin: '50px'}} size={1} fit caps>
            ReDI Munich JavaScript 2 Course (Fall 2019)
          </Heading>
          <Heading style={{margin: '50px'}} size={2} fit>
            Orientation Sessions (2019-09-05, 2019-09-09)
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps>
            JavaScript
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Popularity of JavaScript
          </Heading>
          <BlockQuote>
            <Image
              src="stackoverflow-trend-chart-languages.png"
              height="300px"
            />
            <Cite>
              <a href="https://insights.stackoverflow.com/trends?tags=java%2Cc%2Cc%2B%2B%2Cpython%2Cc%23%2Cvb.net%2Cjavascript%2Cassembly%2Cphp%2Cperl%2Cruby%2Cvb%2Cswift%2Cr%2Cobjective-c">Stack Overflow Trends</a>
            </Cite>
          </BlockQuote>          
          <Text>
            Currently one of the most popular programming languages.
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>
            Runs Everywhere
          </Heading>
          <Text>
            JavaScript runs natively in all browsers on desktop and mobile devices, on the backend, and also on IoT devices.
          </Text>
          <Text>
            TODO: Images of browser, tablet, mobile, server, Raspberry PI
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>
            Ecosystem
          </Heading>
          <Text>
            TODO: Logos of libraries, number of npm packages
          </Text>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Old Language - Modern Language
          </Heading>
          <Text>
            Language modernization is ongoing.
          </Text>
          <List textColor="black">
            <ListItem>functional programming</ListItem>
            <ListItem>object-oriented programming</ListItem>
            <ListItem>async programming</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps>
            Frontend Frameworks
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Single-Page Applications
          </Heading>
          <Text>
            Applications with Web frontend, only data is retrieved from backend, but UI is rendered in JavaScript inside the browser.
          </Text>
          </Slide>
          <Slide>
          <Heading size={2}>
            React
          </Heading>
          <Text>
            In JS2 course at ReDI school we focus on React.
          </Text>
          <List textColor="black">
            <ListItem>view framework</ListItem>
            <ListItem>based on functional programming</ListItem>
            <ListItem>initiated by Facebook</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Popularity of React
          </Heading>
          <BlockQuote>
            <Image
              src="stackoverflow-trend-chart-frameworks.png"
              height="300px"
            />
            <Cite>
              <a href="https://insights.stackoverflow.com/trends?tags=jquery%2Cangularjs%2Cangular%2Creactjs">Stack Overflow Trends</a>
            </Cite>
          </BlockQuote>          
          <Text>
            Currently one of the most popular frontend frameworks for JS.
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit caps>
            JS2 Course at ReDI School
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>
            Contents
          </Heading>      
          <Text>
            Technology
          </Text>
          <List textColor="black">
            <ListItem>learn to use modern JavaScript</ListItem>
            <ListItem>learn to use the React framework</ListItem>
            <ListItem>learn to use a React/JavaScript development stack</ListItem>
            <ListItem>introduce new JS topics and tools only if needed</ListItem>
          </List>
          <Text>
            Project
          </Text>
          <List textColor="black">
            <ListItem>work on a realistic project in a team</ListItem>
            <ListItem>ideally: suggest your own project</ListItem>
            <ListItem>include topics on demand which are required for the project</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>
            Teaching Team
          </Heading>      
          <List textColor="black">
            <ListItem>Bodo</ListItem>
            <ListItem>Carl</ListItem>
            <ListItem>Grace</ListItem>
            <ListItem>Max</ListItem>
            <ListItem>Rafa</ListItem>
            <ListItem>Tim</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Minimum Entry Requirements
          </Heading>      
          <List textColor="black">
            <ListItem>Basic HTML and CSS</ListItem>
            <ListItem>Basic JavaScript like variables, functions, loops, objects, arrays</ListItem>
            <ListItem>Basic DOM manipulation</ListItem>
            <ListItem>Motivation and ability to work in a team</ListItem>
            <ListItem>Willing to try out and research stuff at home</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Admission Test - Sample Questions
          </Heading>      
          <List textColor="black">
            <ListItem>Write a function which computes the maximum of two numbers.</ListItem>
            <ListItem>
              Given the teachers of this course as a JS data structure.
              <CodePane
                lang="js" margin="20px auto" overflow="overflow"
                source={
`const teachers = [
  {name: 'Bodo', gender: 'm'},
  {name: 'Carl', gender: 'm'},
  {name: 'Grace', gender: 'f'},
  {name: 'Max', gender: 'm'},
  {name: 'Rafa', gender: 'm'},
  {name: 'Tim', gender: 'm'},
];`}
              />
              Write a function which computes the number of female resp. male teachers.
              Write a function which adds the names of the teachers as ul element as a child to a DOM node.
            </ListItem>
          </List>
          </Slide>
          <Slide>
            <Heading size={1}>
              Questions?
            </Heading>      
          </Slide>
      </Deck>
    );
  }
}
