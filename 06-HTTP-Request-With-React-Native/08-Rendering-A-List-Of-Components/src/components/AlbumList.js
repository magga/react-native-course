import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Axios is a library to help us make an HTTPRequest (simply get or post data to internet)
// Install it first from npm using "npm install --save axios"
import axios from 'axios';

class AlbumList extends Component {
    // State is the concept that we use for updating the data that the component
    //   show over time as the user starts to interact with our apps
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    // Create a helper function to help us convert the data that we fetch from internet
    //   to a JSX syntax
    renderAlbums() {
        // We use .map() to iterate all the data from the array (albums is an array)
        //   an return something FOR EACH of the data

        // Whenever we show compnents that are in an array, each component inside of
            //   that array must have a key property associated with it
            // The purpose of this is just for performance concerns
            // The key property have to be unique across all of the other elements in the array
            // The common mistake is just don't use the array index as a key
            // The best practice is to assigned the key with the id (if there is any)
        return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {/* Lastly we call the helper method */}
                {/* Because it's called inside a JSX, we can call it by using the { } */}
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
