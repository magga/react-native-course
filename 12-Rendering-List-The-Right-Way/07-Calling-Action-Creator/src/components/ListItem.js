import React, { Component } from 'react';
import { Text } from 'react-native';
// 12-7
// We'll use the connect function from react-redux library to get the current
//   selectedLibraryId Reduce
// We can use connect to call an ActionCreator too
import { connect } from 'react-redux';

import { CardSection } from './common';
// 12-7
// Usually, if we make an app, we'll make a bunch of Actions
// And that Actions stored in the "actions" folder
// In the index.js' actions folder, we export every Action one by one
// Notice that in there, we use "export" syntax, not the "export default"
// That means that we can use more than one "export"
// Quite the opposite of "export default" that can only used once in the js file
// So because we have a bunch of Actions, that Actions can be imported as an array
// To do that, we use the syntax "*" to represent "all Actions" and save it as an "actions"
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props);

        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// 12-7
// We use the connect function here
// The first argument in the connect function required a mapStateToProps
// Now because we currently don't need to get any State, we can pass it as a null
// For the second argument, we can pass an actions from our actions folder to this
//   ListItem component as a props
// And the interesting part here, when we pass an actions with the connect function,
//   that actions will automatically dispatched (run) if we call it in the ListItem class
// So the connect function do an automatic binding to the "dispatch" function for our actions
export default connect(null, actions)(ListItem);
