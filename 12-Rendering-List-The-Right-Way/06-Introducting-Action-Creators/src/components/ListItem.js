import React, { Component } from 'react';
import { Text } from 'react-native';

import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        return (
            // 12-4
            // To display a row, we an use a component that we've made before
            // In this case, we can use CardSection component to make a nice interface
            <CardSection>
                {/* 12-4 */}
                {/* We want to display the title in each row of the ListView */}
                {/* To access the title, we can use the props */}
                {/* Remember that the data we have is wrapped in the "library" key */}
                {/*   so to access that we can use the props.library.title */}
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

// 12-4
// Add some style for the title Text
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
