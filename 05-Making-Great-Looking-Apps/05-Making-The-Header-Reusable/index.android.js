import React from 'react';
import { AppRegistry } from 'react-native';

// Relative path reference to import from the Component's folder
// Don't need to explicitly write the .js extension behind the file name
import Header from './src/components/header';

const App = () => (
  // Parse the headerText property to the Header element
  <Header headerText={'My Albums'} />
);

// Component Nesting :
// The process of placing one component inside of another

AppRegistry.registerComponent('albums', () => App);
