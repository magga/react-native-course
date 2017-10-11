import React, { Component } from 'react';
import { View, Text } from 'react-native';
// 8-3
// So instead of importing Header from Header.js, we can import it
//   (alongside another common components) from just a single import statement
//   in the index.js
// We don't have to explicitly write the index.js behind the './components/common'
import { Header } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                {/* We parse the Authentication text to Header component using props */}
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
