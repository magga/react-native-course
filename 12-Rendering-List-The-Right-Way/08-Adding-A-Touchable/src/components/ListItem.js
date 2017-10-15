import React, { Component } from 'react';
// 12-8
// As we mention before, we have 4 types of component that can receive an input
// For this case, we can use the TouchableWithoutFeedback component
// We use this component because, as the name imply, we don't want the user receive
//   any kind of "default feedback" from the component itself
// The default feedback here is kind of like a change of color or opacity when we press a button
// And don't forget to import a View component here
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        // 12-8
        // Do some destructuring here
        const { id, title } = this.props.library;

        return (
            // 12-8
            // We wrap the ListItem with Touchable component so all of the component inside
            //   here can be a trigger

            // 12-8
            // And then we call the action selectLibrary here to change the selectedLibraryId
            //   to the id's that being touched

            // 12-8
            // Now we have to update the SelectionReducer.js
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                {/* 12-8 */}
                {/* Because we want to put another CardSection for the description, we wrap */}
                {/*   it with a View */}
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, actions)(ListItem);
