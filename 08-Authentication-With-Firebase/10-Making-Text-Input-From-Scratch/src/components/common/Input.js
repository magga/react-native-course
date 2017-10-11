// 8-10
// We make a new file called Input to store the TextInput component
// Because we want to make this component reusable, the Text (label) there
//   better be dynamic (the label can be changed dynamically)
// To do this, as usual, we use props

import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
        </View>
    );
}

export { Input };
