import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
// 16-3
// Import the EmployeeList component
// This component will be displayed in the different screen than the
//   Login form
// So we'll have 2 mutually different screens
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene 
                    key='login'
                    component={LoginForm}
                    title='Please Login'
                    titleStyle={{ alignSelf: 'center' }}
                    initial
                />
                {/* 16-3 */}
                {/* We make the 2nd Scene to display just the EmployeeList */}
                <Scene
                    key='employeeList'
                    component={EmployeeList}
                    title='Employees'
                    titleStyle={{ alignSelf: 'center' }}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
