import React from 'react';
// To display an image, we can use the native library from React Native,
//    that is simply called Image
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// When we use more than one property/variable from props, it's a good 
//   practice to use destructuring to avoid typing a long property access syntax
const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist } = album;
    const { thumbnailStyle, headerContentStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    {/* The Image that we use will have a 0 width and height as a default */}
                    {/* So we have to specifically tell how big the image will be using style */}
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>

                {/* We apply the style that we made below using the style tag */}
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
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
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
