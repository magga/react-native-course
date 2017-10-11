import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    const { spinnerStyle } = styles;

    return (
        <View style={spinnerStyle}>
            {/* 9-4 */}
            {/* ActivityIndicator have a props named "size" that (as the name imply), define */}
            {/* the size of it. We use the or (||) sign to determine whether if the props is */}
            {/* undefined, we use the 'large' props instead */}
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

// 9-4
// Create a styling for View that containing ActivityIndicator
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
