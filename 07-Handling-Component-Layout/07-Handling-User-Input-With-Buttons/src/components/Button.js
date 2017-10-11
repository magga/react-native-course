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
    return (
        <TouchableOpacity>
            <Text>Click Me</Text>
        </TouchableOpacity>
    );
};

export default Button;
