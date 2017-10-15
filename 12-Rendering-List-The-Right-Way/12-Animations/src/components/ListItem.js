import React, { Component } from 'react';
// 12-13
// Lastly, we want to make a nice fade-in fade-out animation when the user
//   touch a library
// To do this, we can use the "LayoutAnimation" library
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

// 12-13
// In Android, we have to use the NativeModules to do a Layout Animation
// This is not necessary on iOS though
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    // 12-13 
    // To do an animation, we can put the LayoutAnimation in the componentWillUpdate lifecycle
    // This code here roughly says, "do an animation (that is the LayoutAnimation.spring()) for
    //   every component that's being updated at that time"
    // The "components being updated" here includes the component that's being appear and
    //   disappear too
    // They'll all be animated
    // That's the magic of LayoutAnimation, we write a single line of code but it affect all of
    //   the components
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                // 12-13
                // To make the description more stylish, we can wrap it with a CardSection
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
