// 9-3
// Spinner is one of important component to tell the user that our app
//   is trying to do/fetch something that takes a long time

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View>
            <ActivityIndicator />
        </View>
    );
};

// 9-3
// Again that we make a simpler import construction, we don't use the "default" statement
// And to make this Spinner available, we have to update the index.js file
export { Spinner };
