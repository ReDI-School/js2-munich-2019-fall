import React from 'react';
import { CodePane, Deck, Heading, Image, Slide, Text } from 'spectacle';
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
      <CodePane
        language="jsx"
        source={`
<Cookbook>
  <Recipe
    name="Kaiserschmarrn"
    image="kaiserschmarrn.jpg"
    authors={['Tim']}
    tags={['Austrian', 'vegetarian', 'Mehlspeise', 'sweet']}
    rating="5"
    time="25"
    price="2.40"
    description="Kaiserschmarren is a light, caramelized pancake made from a sweet batter using flour, eggs, sugar, salt, and milk, baked in butter."
  >
    <Ingredients servings="4">
      <Ingredient amount="6">eggs</Ingredient>
      <Ingredient amount="250" unit="g">wheat flour</Ingredient>

    </Ingredients>
    <Instructions>
      <Instruction>Separate the eggs and place the egg whites and the yolks in two separate mixing bowls.</Instruction>
      <Instruction>Beat the egg whites with 1 table spoon of crystal sugar and a small pinch of salt until it forms a firm peak.</Instruction>

    </Instructions>
  </Recipe>
</Cookbook>
        `}
      />
      {/* TODO
        show sample homework result (code and rendered app).
        Discuss problem: create general Recipe component which gets the recipe as a prop
      */}
    </Slide>
    <Slide>
      <Heading size={2}>
        Representing a Recipe in JavaScript
      </Heading>
      <CodePane
        language="jsx"
        source={`
const kaiserschmarrn = {
  title: 'Kaiserschmarrn',
  image: 'kaiserschmarrn.jpg',
  authors: ['Tim'],
  tags: ['Austrian', 'vegetarian', 'Mehlspeise', 'sweet'],
  rating: 5,
  time: 25,
  description: 'Kaiserschmarren is a light, caramelized pancake made from a sweet batter using flour, eggs, sugar, salt, and milk, baked in butter.',
  servings: 4,
  ingredients: [
    { name: 'eggs', amount: 6 },
    { name: 'wheat flour', amount: 250, unit: 'g' },
  ],
  steps: [
    // ...
  ]
};
        `}
      />
      <Text>hierarchical object consisting of objects and arrays</Text>
    </Slide>
    <Slide>
      <Heading size={2}>
        General Recipe Component
      </Heading>
      <Text>pass recipe via props</Text>
      <CodePane
        language="jsx"
        source={`
function Recipe(props) {
  <article>
    <h2>{props.name}</h2>
    <Ingredients servings={props.servings}>
      ??? what to do with list of ingredients ???
    </Ingredients>
    <Instructions>
      ??? what to do with list of instructions ???
    </Instructions>
  </article>
};
        `}
      />
    </Slide>
    <Slide>
      {/* TODO
        Problem: IngredientsList. need to process each ingredient in a list
        introduce map as higher-order function
      */}
    </Slide>
    <Slide bgImage="board-928381_960_720.jpg" />
    <Slide>
      <Heading size={2}>
        map
      </Heading>
      <Text>some non-React JavaScript example, e.g. use map for converting an array of strings into an array of their lengths</Text>
      <Text>Implement Instructions using map</Text>
    </Slide>
  </Deck>
);
