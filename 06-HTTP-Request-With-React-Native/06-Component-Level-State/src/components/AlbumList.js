import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Axios is a library to help us make an HTTPRequest (simply get or post data to internet)
// Install it first from npm using "npm install --save axios"
import axios from 'axios';

class AlbumList extends Component {
    // State is a variable that can hold an object (that can contains any kind of data)
    // This state can be declared once in the beginning of the class
    // After that, the value can be changed inside the code using setter
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // After we get the data over the internet, we can save it to the state variable
            // To save it, use the setter method "this.setState()"
            // You can't use a direct syntax like "this.state = { albums: [] }"
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        // To ensure what the variable state contains of, we can log it in the render method
        // To many surprise, the log run twice
        console.log(this.state);

        return (
            <View>
                <Text>Album List !</Text>
            </View>
        );
    }
}

export default AlbumList;
