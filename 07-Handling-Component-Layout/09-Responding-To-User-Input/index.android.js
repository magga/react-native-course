import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// For any component that we create, we must return a single top level JSX tag
// So you can't add the AlbumList here
// You can resolve it by wrapping them with a View tag
const App = () => (
  // 7-6
  // There's a little bug here where the view doesn't cover all of the screen
  // In Android that have a virtual navigation button, the bottom screen cropped
  // To fix this, we can add the flex: 1 property
  // flex: 1 means that the view will take an entire screen available
  <View style={{ flex: 1 }}>
    <Header headerText={'My Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
