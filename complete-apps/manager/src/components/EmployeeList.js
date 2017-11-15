import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';

class EmployeeList extends Component {
    // 16-5
    // To programatically disable the Android's back button, you can use
    //   the BackHandler component
    // In this component, if you return "true", the hardware's back button will be disabled
    //   for this component only
    // For more information :
    //   --> https://facebook.github.io/react-native/docs/backhandler.html
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }
    
    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default EmployeeList;
