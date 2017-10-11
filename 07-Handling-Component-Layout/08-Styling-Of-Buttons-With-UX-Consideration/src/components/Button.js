import React from 'react';
// 7-7
// To make a view that can be clicked, we used a TouchableOpacity
// TouchableOpacity is a view that when it's clicked, the component inside it will dim for a while
// In React Native, a component for getting user input (kind of like a Button) 
//   is not just one (TouchableOpacity)
// You can use TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, or TouchableWithoutFeedback
// For more information about this, visit http://facebook.github.io/react-native/docs/getting-started.html
//   in the "Components" section
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    // 7-8
    // Destructure the style
    const { buttonStyle, textStyle } = styles;

    return (
        // 7-8
        // Apply the style to the corresponding components
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>Click Me</Text>
        </TouchableOpacity>
    );
};

const styles = {
    // 7-8
    // Style the button so that it appears more likely like an iOS button
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
