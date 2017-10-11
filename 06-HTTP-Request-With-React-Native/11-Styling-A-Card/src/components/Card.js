import React from 'react';
import { View } from 'react-native';

// We used Card to style the component so that it will appear nicely
const Card = () => {
    return (
        // To apply the style that we've define below, use the "style" tag
        <View style={styles.containerStyle}>

        </View>
    );
}

// Add styling to the component
// The name containerStyle is arbitrary
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
