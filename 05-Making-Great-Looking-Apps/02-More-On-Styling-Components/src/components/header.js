import React from 'react';

// View :
// Primitive element used to position elements, wrap certain elements,
// or style elements inside the app
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    // Use parentheses if we have multiple element
    return (
        // Wrap the text inside the View
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};

const styles = {
    // used to style the View
    viewStyle: {
        // backgroundColor is also have an equivalent property in CSS
        // To know more about styling in React Native, visit
        // https://facebook.github.io/react-native/docs/style.html
        backgroundColor: '#96ceb4'
    },
    textStyle: {
        fontSize: 25
    }
};

export default Header;
