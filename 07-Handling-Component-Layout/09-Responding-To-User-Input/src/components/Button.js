import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        // 7-9
        // We can use onPress property to specify what will happen when the TouchableOpacity is pressed
        // This onPress is only available in Touchable component

        // 7-9
        // To make our component reusabale, we don't specify the onPress command in the Button
        // If we do that, it means that our button can do only one thing when it's clicked
        // We want it to be dynamic, so that our Button can do anything when pressed
        // So we specify the onPress command not in Button file, but in the component that called it
        // We do it in AlbumDetail and pass that command as a props
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>Click Me</Text>
        </TouchableOpacity>
    );
};

const styles = {
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
