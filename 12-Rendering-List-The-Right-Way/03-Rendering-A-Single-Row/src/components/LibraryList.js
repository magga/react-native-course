import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // 12-3
    // renderRow is a helper function (obviously the renderRow name here can be changed as we like)
    //   to tell the ListView how to display the data
    // But remember that renderRow will tell how to display ONE row, not the entire list item at once
    // So the parameter "library" here contains just a single data (ex. one libraries)
    // renderRow will be executed in every item that appeared on the screen
    // So if we have 5 items in the screen, it means that it happened because the renderRow run 5 times
    // As the user scroll, the renderRow will be run everytime an item appear on the screen for the first time

    // To display a single library, we can create a new component called ListItem
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
