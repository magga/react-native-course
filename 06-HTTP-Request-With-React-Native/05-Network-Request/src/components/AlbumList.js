import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Axios is a library to help us make an HTTPRequest (simply get or post data to internet)
// Install it first from npm using "npm install --save axios"
import axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
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
