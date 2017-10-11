import React, { Component } from 'react';
// We don't need the Text import anymore
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            // Instead of just displaying one text, we want to display all of the album information
            // So we make an AlbumDetail compnent to do that
            // To parse the data we get from axios here to the AlbumDetail component, we can use props
            <AlbumDetail key={album.title} album={album} />
        );
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
