import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            {/* We can get the data that parsed here by using props */}
            {/* Because we name it "album", we can access the data by using props.album */}
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;
