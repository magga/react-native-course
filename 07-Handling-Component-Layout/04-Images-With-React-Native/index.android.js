import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// For any component that we create, we must return a single top level JSX tag
// So you can't add the AlbumList here
// You can resolve it by wrapping them with a View tag
const App = () => (
  <View>
    <Header headerText={'My Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
