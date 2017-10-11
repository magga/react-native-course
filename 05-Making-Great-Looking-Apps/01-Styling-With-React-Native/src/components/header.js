// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
    // Use the destructuring import
    const { textStyle } = styles;

    // Use "props" (or properties) to apply a styling to JSX
    return <Text style={textStyle}>Albums</Text>;
};

// Object that's used to style the Header
const styles = {
    textStyle: {
        // A little bit like the font-size property on CSS
        // The difference is just the name convention
        // React Native uses the camel case convention
        fontSize: 25
    }
};

// Make the component available to other parts of the app
export default Header;
