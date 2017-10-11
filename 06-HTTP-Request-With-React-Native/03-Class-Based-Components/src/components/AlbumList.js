// Import Component from react library
// We don't want to destructure the React import (just leave it as it is)
// because the React variable will be used by the interpreter to convert
// JSX tag to Javascript (React.createElement())
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Refactor AlbumList from Functional Component to Class-Based Component
// because we want the AlbumList to display a dynamic data from Internet
class AlbumList extends Component {
    // All class that extend Component class have to override one method, that is Render()
    render() {
        return (
            <View>
                <Text>Album List !</Text>
            </View>
        );
    }
// Remove the semicolon because a Class doesn't end with semicolon
}

export default AlbumList;
