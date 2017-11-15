// 16-2
// The purpose of this Router.js file is for us to have one location
//   where we can tweak all of the different Scenes (routes) that 
//   a user can navigate to
// So in this file we're going to define all the different possible Scenes

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        // 16-2
        // This Router tag will organize all different Scenes that we're going to put
        <Router>
            <Scene key='root'>
                {/* 16-2 */}
                {/* Each Scenes corresponds to one distinct screen that we want to */}
                {/*   show to the user */}
                <Scene 
                    // 16-2
                    // Will be used for routing purpose
                    key='login'
                    // 16-2
                    // The component that will be shown inside our Scene
                    component={LoginForm}
                    // 16-2
                    // title will be a text for our header component
                    title='Please Login'
                    // 16-2
                    // Make the header's text centered
                    titleStyle={{ alignSelf: 'center' }}
                    // 16-2
                    // Tell that this is the first Scene that will appear
                    initial
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
