import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
// To achieve our goal, now we add a CardSection to wrap the individual component
//   to be placed under Card
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        // So instead of View, we use Card as the wrapper
        // With this, we can style the component once in the Card
        <Card>
            {/* Wrap the text inside the CardSection */}
            {/* The purpose of the card section is just to make sure that we've got */}
            {/* a nice little compact area within within the card */}
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>

            {/* To see the difference clearly, we can add another information inside */}
            {/* the CardSection here */}
            <CardSection>
                <Text>{props.album.url}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
