import React from 'react';
import Avatar from 'react-avatar';
import { BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, List, ListItem, Slide, Text } from 'spectacle';
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
        Orientation Sessions Fall 2019
      </Heading>
      <Heading style={{margin: '50px'}} size={3}>
        (2019-09-05, 2019-09-09)
      </Heading>
    </Slide>
    <Slide bgImage="code-3625646_960_720.jpg">
      <Heading size={1} caps>
        JavaScript
      </Heading>
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Old Language - Modern Language
      </Heading>
      <List textColor="black">
        <ListItem>JavaScript is nearly 25 years old.</ListItem>
        <ListItem>Language modernization is rapidly ongoing.</ListItem>
      </List>
      <Text textAlign="left">
        Different programming paradigms can be used in JavaScript:
      </Text>
      <List textColor="black">
        <ListItem>functional programming</ListItem>
        <ListItem>object-oriented programming</ListItem>
        <ListItem>async programming</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2}>
        JavaScript Runs Everywhere
      </Heading>
      <Text textAlign="left">
        JavaScript runs natively
      </Text>
      <List textColor="black">
        <ListItem>in all browsers on desktop and mobile devices,</ListItem>
        <ListItem>on the backend, and</ListItem>
        <ListItem>also on IoT devices</ListItem>
      </List>
      <Layout>
        <Fill>
          <Image src="computers-2690565_960_720.png"/>
        </Fill>
        <Fill>
        <Image src="server-1235959_960_720.jpg"/>
        </Fill>
        <Fill>
        <Image src="raspberry-pi-1719218_960_720.jpg"/>       
        </Fill>
      </Layout>
    </Slide>
    <Slide bgImage="ecosystem.png" bgRepeat="repeat" bgSize="300">
      <Heading padding={50} size={2} bgColor="white">
        Huge Ecosystem
      </Heading>
      <Text padding={50} bgColor="white">
        Mastering JavaScript is not only to know the language, but also the ecosystem.
      </Text>
    </Slide>
    <Slide>
      <Heading size={2}>
        Popularity of JavaScript
      </Heading>
      <BlockQuote>
        <Image
          src="stackoverflow-trend-chart-languages.png"
          height="500px"
        />
        <Cite>
          <a href="https://insights.stackoverflow.com/trends?tags=java%2Cc%2Cc%2B%2B%2Cpython%2Cc%23%2Cvb.net%2Cjavascript%2Cassembly%2Cphp%2Cperl%2Cruby%2Cvb%2Cswift%2Cr%2Cobjective-c">Stack Overflow Trends</a>
        </Cite>
      </BlockQuote>          
      <Text>
        Currently one of the most popular programming languages.
      </Text>
    </Slide>
    <Slide bgImage="web-3967926_960_720.jpg">
      <Heading size={1} caps>
        Frontend Frameworks
      </Heading>
    </Slide>
    <Slide>
      <Heading size={2}>
        Single-Page Applications
      </Heading>
      <Text margin="20px">
        Applications with Web frontend,
        where the page is re-written inside the browser instead of re-loaded from the backend.
      </Text>      
      <Text>
        Only data is retrieved from the backend.
      </Text>
    </Slide>
    <Slide bgImage="reactjs.svg" bgLighten={0.8} bgSize="contain" bgRepeat="no-repeat">
      <Heading size={2}>
        React
      </Heading>
      <Text>
        In JS2 course at ReDI school we focus on React.
      </Text>
      <List textColor="black">
        <ListItem>declarative view framework</ListItem>
        <ListItem>define UI components</ListItem>
        <ListItem>describe how data maps to a UI</ListItem>
        <ListItem>React cares about re-rendering when data changes</ListItem>
        <ListItem>based on functional programming</ListItem>
        <ListItem>initiated by Facebook</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2}>
        Popularity of React
      </Heading>
      <BlockQuote>
        <Image
          src="stackoverflow-trend-chart-frameworks.png"
          height="500px"
        />
        <Cite>
          <a href="https://insights.stackoverflow.com/trends?tags=jquery%2Cangularjs%2Cangular%2Creactjs">Stack Overflow Trends</a>
        </Cite>
      </BlockQuote>          
      <Text>
        Currently one of the most popular frontend frameworks for JS.
      </Text>
    </Slide>
    <Slide bgImage="board-2167844__340.jpg">
      <Heading size={1} fit caps>
        JS2 Course at ReDI School
      </Heading>
    </Slide>
    <Slide>
      <Heading size={2}>
        Contents
      </Heading>
      <Layout>
        <div style={{ margin: '20pt' }}>
          <Heading size={3}>
            Technology
          </Heading>
          <List textColor="black">
            <ListItem>learn to use modern JavaScript</ListItem>
            <ListItem>learn to use the React framework</ListItem>
            <ListItem>learn to use a React/JavaScript development stack</ListItem>
            <ListItem>introduce new JS topics and tools only if needed</ListItem>
          </List>
        </div>
        <div style={{ margin: '20pt' }}>
          <Heading size={3}>
            Project
          </Heading>
          <List textColor="black">
            <ListItem>work on a realistic project in a team</ListItem>
            <ListItem>ideally: suggest your own project</ListItem>
            <ListItem>include topics on demand which are required for the project</ListItem>
          </List>
        </div>
      </Layout>      
      </Slide>
    <Slide>
      <Heading size={2}>
        Teaching Team
      </Heading>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div style={{ margin: '50px' }}>
          <Avatar round githubHandle="bodokaiser" />
          <Text>Bodo</Text>
        </div>
        <div style={{ margin: '50px' }}>
          <Avatar round name="Carl" />
          <Text>Carl</Text>
        </div>
        <div style={{ margin: '50px' }}>
          <Avatar round name="Grace" src="grace.png"/>
          <Text>Grace</Text>
        </div>
        <div style={{ margin: '50px' }}>
          <Avatar round name="Max" src="max.png"/>
          <Text>Max</Text>
        </div>
        <div style={{ margin: '50px' }}>
          <Avatar round githubHandle="pigulla" />
          <Text>Raph</Text>
        </div>
        <div style={{ margin: '50px' }}>
          <Avatar round src="tim.jpg"/>
          {/*githubHandle="TimGeisler"*/}
          <Text>Tim</Text>
        </div>
      </div>
    </Slide>
    <Slide>
      <Heading size={2}>
        Minimum Entry Requirements
      </Heading>      
      <List textColor="black">
        <ListItem>Basic HTML and CSS</ListItem>
        <ListItem>Basic JavaScript like variables, functions, loops, objects, arrays</ListItem>
        <ListItem>Basic DOM manipulation</ListItem>
        <ListItem>Motivation and ability to work in a team</ListItem>
        <ListItem>Willing to regularly do the homework</ListItem>
        <ListItem>Willing to try out and research stuff at home</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} fit>
        Admission Test - Sample Questions
      </Heading>      
      <List ordered textColor="black">
        <ListItem>Write a function which computes the maximum of two numbers.</ListItem>
        <ListItem>
          Given the teachers of this course as a JS data structure.
          <CodePane
            lang="js" margin="20px auto" overflow="overflow"
            theme="light"
            textSize="24"
            source={
`  const teachers = [
    {name: 'Bodo', gender: 'm'},
    {name: 'Carl', gender: 'm'},
    {name: 'Grace', gender: 'f'},
    {name: 'Max', gender: 'm'},
    {name: 'Raph', gender: 'm'},
    {name: 'Tim', gender: 'm'},
  ];`}
          />
          <List textColor="black">
            <ListItem>Write a function which computes the number of female resp. male teachers.</ListItem>
            <ListItem>Write a function which adds the names of the teachers as ul element as a child to a DOM node.</ListItem>
          </List>
        </ListItem>
      </List>
    </Slide>
    <Slide bgImage="question-1262378_960_720.jpg"/>
  </Deck>
);
