import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
        // So instead of View, we use Card as the wrapper
        // With this, we can style the component once in the Card
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );
};

export default AlbumDetail;
