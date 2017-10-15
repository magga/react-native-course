import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        // 12-11 : Third Step
        // We don't need the selectedLibraryId anymore
        // Instead we use the "expanded" boolean props
        const { library, expanded } = this.props;

        // 12-11 : First Step
        // Here we have a "business logic" statement to determine whether the current rendered
        //   library list is a selected library list (if true then expand it's description)
        // The current goal here is that we want to make our components as "stupid" as it can by 
        //   removing the business logic out of it
        // So, if possible, we want to move out this "if"-comparison statement out of the component and in
        //   exchange, here we can just maybe receive a single boolean value (true or false) 
        //   that if it's true, then we should expand the description and otherwise if it's
        //   false then we shouldn't
        // The next question is, if we can't put the business logic here, where should we?
        // You can use that, for example, in the mapStateToProps function
        
        // if (library.id === selectedLibraryId) {
        //     return (
        //         <Text>{library.description}</Text>
        //     );
        // }

        // 12-11 : Fourth Step
        // Lastly instead of doing a comparison logic here, we can just do a simple boolean
        //   comparison instead
        if (expanded) {
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

// 12-11 : Second Step
// We can put the business logic inside the mapStateToProps to make our components
//   as simple as it can
// So here we compare the current-rendered library id to the selected library id from
//   the state
// But the problem is that we only have the state
// The current-rendered library id can be read only inside the component while this
//   mapStateToProps resides outside the ListItem component
// To read the current-rendered library id, we can get it by adding a second parameter,
//   namedly ownProps
// This parameter hold the ListItem's current props
// From here we can get that current-rendered library id
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
