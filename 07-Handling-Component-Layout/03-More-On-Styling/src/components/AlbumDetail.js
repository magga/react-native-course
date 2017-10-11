import React from 'react';
// Import the View to wrap components here
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View></View>

                {/* We apply the style that we made below using the style tag */}
                <View style={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

// To get the title and album text stacking vertically against the view,
//    we use the flexBox. We set the direction and justifyContent as follow
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
