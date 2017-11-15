import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    // 16-5
    // We can override wherever the android user press the hardware's back button,
    //   if we're not on the first screen, the user will be redirected to the
    //   previous screen using Actions.pop() function
    const onBackPress = () => {
        if (Actions.state.index > 0) {
            Actions.pop();
        }
        
        return true;
    };

    return (
        // 16-5
        // To handle the Android's Back Button, we can use the help of 
        //   backAndroidHandler props
        // We use a helper method here
        <Router backAndroidHandler={onBackPress}>
            <Scene key='root' hideNavBar>
                {/* 16-5 */}
                {/* To solve the back button's problem, we can group the Login */}
                {/*   Form and Main Page into 2 separate Scene's bucket */}
                {/* The Login Form inside the auth's Bucket and the Main Page */}
                {/*   (Employee List) in the main's Bucket */}
                {/* With this, everytime we navigate from one bucket into another */}
                {/*   bucket, the back button won't appear on the top-left header */}
                {/* It will appear only if we navigate into the Scene in the */}
                {/*   same bucket */}

                {/* 16-5 */}
                {/* Because now we have 2 buckets, we have to set the initial */}
                {/*   bucket to appear first */}
                <Scene key='auth' initial>
                    <Scene 
                        key='login'
                        component={LoginForm}
                        title='Please Login'
                        titleStyle={{ alignSelf: 'center' }}
                        initial
                    />
                </Scene>

                <Scene key='main'>
                    <Scene
                        key='employeeList'
                        component={EmployeeList}
                        title='Employees'
                        titleStyle={{ alignSelf: 'center' }}
                        // 16-5
                        // Because now Employee List is in the different bucket, we
                        //   set the "initial" props for every bucket
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
