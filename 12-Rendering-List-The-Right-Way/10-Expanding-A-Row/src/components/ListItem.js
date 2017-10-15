import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    // 12-10
    // Everytime we want the library selected, that library's description is shown
    //   to the screen
    // We got the current selected library's id in the form of props' selectedLibraryId
    // Here we make a helper method to determine if the current's ListItem is the selected
    //   library, then we'll show it's description
    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if (library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
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

// 12-10
// Now that we want to expand a CardSection everytime user touch our Library,
//   we surely want to know the current selected library
// We can get that from the selectedLibraryId in our Reducer
// So to get that we can use the mapStateToProps function
const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

// 12-10
// Pass that mapStateToProps to the ListItem component by using connect function
export default connect(mapStateToProps, actions)(ListItem);
