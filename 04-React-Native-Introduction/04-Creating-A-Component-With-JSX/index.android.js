// Import a library to help us creating a component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
// Component is something that produces some amount of text, or any other content, 
// that we can render on the screen of our mobile device
const App = () => {
  // Retrun a JSX
  // JSX is an extension to the Javascript language that is used to write a React components
  // In practice, JSX follow the same semantics of HTML
  // Eventhough it looks like HTML, it is still Javascript
  // JSX exists only to make our life easier
  // To prove that JSX can be converted into Javascript, open babeljs.io to do the conversion
  return (
    <Text>Some Text</Text>
  );
}

// Render it to the device
