import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Lifecycle Methods are functions in the class that will be automatically
//  called at some point 

class AlbumList extends Component {
    // One example of Lifecycle Method is componentWillMount()
    // This method will be called any time the component out to be rendered to the screen]
    componentWillMount() {
        // To see the console log, press Ctrl (or Command in Mac) + M (Android) 
        // or Command + D (iOS) in the simulator / device when the app run
        // Then select "Debug JS Remotely" from the menu that popped up
        console.log('componentWillMount() called');
    }

    render() {
        return (
            <View>
                <Text>Album List !</Text>
            </View>
        );
    }
}

export default AlbumList;
