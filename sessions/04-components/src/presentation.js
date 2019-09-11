import React from 'react';
import { CodePane, Deck, Heading, Image, List, ListItem, Notes, Slide, Text } from 'spectacle';
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
function App() {
  return (
    <div className="App">
      <header>
        <img src="redi-school-logo.webp" alt="ReDI-School" />
        <h1>Cooking with ReDI</h1>
      </header>
      <article>
        <img width="600px" height="400px" src="kaiserschmarrn.jpg" alt="Kaiserschmarrn" />
        <h2>Kaiserschmarrn</h2>
        <p>Author: Tim</p>
        <p>Tags: Austrian, vegetarian, Mehlspeise, sweet</p>
        <p>Rating: 5</p>
        <p>Time: 25 minutes</p>
        <p>price: {1 + 0.2 + 0.5 + 0.6 + 0.1} EUR</p>
        <p>Kaiserschmarren is a light, caramelized pancake made from a sweet batter using flour, eggs, sugar, salt, and milk, baked in butter.</p>
        <h3>Ingredients for 4 servings</h3>
        <table>
          <tr><td>6</td><td>eggs</td></tr>
          <tr><td>250 g</td><td>wheat flour</td></tr>
          <tr><td>500 ml</td><td>milk</td></tr>
          <tr><td>75 g</td><td>butter</td></tr>
          <tr><td>1 pinch</td><td>salt</td></tr>
          <tr><td>3 tsp</td><td>crystal sugar</td></tr>
          <tr><td>some</td><td>icing sugar</td></tr>
        </table>
        <h3>Instructions</h3>
        <ol>
          <li>Separate the eggs and place the egg whites and the yolks in two separate mixing bowls.</li>
          <li>Beat the egg whites with 1 table spoon of crystal sugar and a small pinch of salt until it forms a firm peak.</li>
          <li>Let the butter melt in a pan.</li>
          <li>In the other mixing bowl with the yolks, pour in the milk, two thirds of the liquid butter, and add the flour. Mix to form a smooth dough.</li>
          <li>Fold the beaten egg white into the dough mix.</li>
          <li>Pour the mixture into the pan onto the remaining butter. Cook for some minutes until the underside is light brown, turn over using a spatula, and bake for some more minutes until golden brown.</li>
          <li>Tear the Schmarrn into small pieces, using two forks. Sprinkle with the rest of the crystal sugar, and caramelise while turning the pieces.</li>
          <li>Dust with icing sugar and serve with baked plums or apple compote.</li>
        </ol>
      </article>
    </div>
  );
}
                `}
      />
      <Notes>
        show sample homework result (code and rendered app).

        Discuss repetition: structure for ingredients, structure for steps, ...
      </Notes>
    </Slide>
    <Slide>
      <Heading size={2}>Abstraction: Defining a Component</Heading>
      <Text>It would be nice if we could invent our own "HTML Tags" for a recipe, ingredients, ...</Text>
      <Text>Instead of writing</Text>
      <CodePane
        language="jsx"
        source={`
<tr><td>6</td><td>eggs</td></tr>
<tr><td>250 g</td><td>wheat flour</td></tr>
<tr><td>500 ml</td><td>milk</td></tr>
        `}
      />
      <Text>we would like to write</Text>
      <CodePane
        language="jsx"
        source={`
<Ingredient amount="6">eggs</Ingredient>
<Ingredient amount="250" unit="g">wheat flour</Ingredient>
<Ingredient amount="500" unit="ml">milk</Ingredient>
        `}
      />
    </Slide>
    <Slide>
      <Heading size={2}>React allows to define Components</Heading>
      <CodePane
        language="jsx"
        source={`
function Ingredient(props) {
  return <tr><td>{props.amount} {props.unit}</td><td>{props.children}</td></tr>;
}
        `}
      />
      <Text>This is a functional component.</Text>
      <Text>A functional component maps props to an element.</Text>
    </Slide>
    <Slide>
      {/* TODO
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
