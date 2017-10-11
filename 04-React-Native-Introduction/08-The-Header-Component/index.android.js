import React from 'react';

// Import Destructuring
// The act of pulling out a single property out of a library (in this case 'react-native' library)
// instead of using the whole property from that library
import { Text, AppRegistry } from 'react-native';

// Do some refactoring here
const App = () => (
  <Text>Some Text</Text>
);

// We don't need the ReactNative property anymore
// Instead we use AppRegistry as a property that's been pulled out from 'react-native' library
AppRegistry.registerComponent('albums', () => App);
