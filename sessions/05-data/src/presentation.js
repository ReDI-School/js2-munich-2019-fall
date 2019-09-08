import React from 'react';
import { Deck, Heading, Image, Slide } from 'spectacle';
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
        Discuss problem: create general Recipe 
      */}
    </Slide>
    <Slide>
      {/* TODO
        Discuss problem: create general Recipe component which gets the recipe as a prop
        How to represent recipe as JavaScript: hierarchical object consisting of objects and arrays
        Create general recipe component
        Problem: IngredientsList. need to process each ingredient in a list
        introduce map as higher-order function
      */}
    </Slide>
    <Slide bgImage="board-928381_960_720.jpg" />
    <Slide>
      <Heading size={2}>
        ...
      </Heading>
    </Slide>
  </Deck>
);
