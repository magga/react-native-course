import React from 'react';
import { Text, View } from 'react-native';

// Flexbox is a reference to how we will position elements 
// Flexbox is a system of positioning elements within the container
// Kind of CSS positioning

// Everything in React Native gets positioned to the top left of it's parent
// Just like in the normal HTML

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#96ceb4',
        // justifyContent property is used to position element in the vertical direction
        justifyContent: 'center',
        // alignItems property is used to position element in the horizontal direction
        alignItems: 'center',
        height: 60,
        shadowColor: '#ffeead',
        // The dimension of the shadow (how tall or wide it should be)
        shadowOffset: { width: 0, height: 20 },
        // The darkness of the shadow or how heavy it is
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export default Header;
