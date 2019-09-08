import React from 'react';
import { Deck, Heading, Image, List, ListItem, Slide } from 'spectacle';
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
        Components
      </Heading>
      <Heading style={{margin: '50px'}} size={3}>
        2019-10-xx
      </Heading>
    </Slide>
    <Slide>
      <Heading bgColor="white" size={1} fit>
        Reviewing the Homework
      </Heading>
    </Slide>
    <Slide>
      {/* TODO
        show sample homework result (code and rendered app).
        Discuss repetition: structure for ingredients, structure for steps, ...
        Computer Science: Abstraction is important.
        Introduce a functional component for ingredients.
        JSX
        Functional component: map props to "element"
        Introduce function component for ingredients list.
        Introduce props.children
        ES6 syntax: destructuring: const { amount, unit, ingredient } = props;
      */}
    </Slide>
    <Slide bgImage="board-928381_960_720.jpg" />
    <Slide>
      <Heading size={2}>
        Defining Components
      </Heading>
      <List>
        <ListItem>Define components for Ingredients, Steps, ...</ListItem>
        <ListItem>apply them on your recipe</ListItem>
      </List>
    </Slide>
  </Deck>
);
