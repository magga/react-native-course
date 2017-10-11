import React from 'react';
import { TextInput, View, Text } from 'react-native';

// 8-11
// onChangeText is a method that only available on TextInput, so to use that
//   from the LoginForm, we use the props
// Same goes for the Text component
const Input = ({ label, onChangeText }) => {
    return (
        <View style={{ height: 60, flex: 1 }}>
            <Text>{label}</Text>
            <TextInput
                onChangeText={onChangeText}
                style={{ height: 40, flex: 1 }}
            />
        </View>
    );
};

export { Input };
