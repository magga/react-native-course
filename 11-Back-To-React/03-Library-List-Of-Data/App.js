import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';

// 11-1
// As said at the first lecture, one of the powerful feature of React Native is 
//   it's Reusable Component
// We've made a bunch of components from our previous app
// We can reuse that components in this app
// Just copy all that js file from the auth app's common folder and paste it
//   to this app's common folder and then import it
import { Header } from './src/components/common';

const App = () => {
  return (
    // 11-1
    // The Provider component can only have 1 single child component
    // But that child can have as many subcomponents as it would like
    // We can wrap the Header component with the View tag
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText='Wiki' />
      </View>
    </Provider>
  );
};

export default App;
