import React from 'react';
import { Deck, Heading, Image, MarkdownSlides, Slide } from 'spectacle';
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
        Summary of the JS1 course
      </Heading>
      <Heading style={{margin: '50px'}} size={3}>
        2019-09-xx
      </Heading>
    </Slide>
    {MarkdownSlides`
## JavaScript concepts used in ReDI JS 2019 spring course
(according to https://github.com/ReDI-School/js-munich-2019-spring)

- variables
- functions, return values
- if-then-else statements
- conditions, comparison operators
- primitive data types: number, string, boolean
- Date object
- objects
- arrays
- loops: while, for
- DOM API
  - important for React:
    - document.getElementById
    - events
- tools:
  - Chrome DevTools
  - console.log
  - using the debugger, breakpoints

---

have some examples:
- function which computes the maximum of two values
- function which adds all numbers in a list
- function which gets a list of objects and computes the average of a number property of the objects
- function which gets a list of objects and adds corresponding DOM nodes to a given DOM node
    `}
  </Deck>
);
