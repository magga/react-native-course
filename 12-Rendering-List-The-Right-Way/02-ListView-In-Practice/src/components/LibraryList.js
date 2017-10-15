import React, { Component } from 'react';
// 12-2
// Import ListView component from the react-native library
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    // 12-2
    // To initialize the ListView and tell it what data it shound display,
    //   we add that code before all of the components being rendered
    // To do that, write the code in the componentWillMount built-in function
    componentWillMount() {
        // 12-2
        // The data that being displayed in the ListView component is stored
        //   in the DataSource property
        // To initialize that, we used the syntax below
        // One thing to notice is that when we initialize the DataSoure, we add one
        //   parameter, that is rowHasChanged, to tell the ListView what rules that
        //   we're going to use to render the list item when the user scroll
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // 12-2
        // After that we put the data from the State (that's stored in the props, thanks to the connect() function)
        //   to the DataSource and save that to the dataSource variable
        // Later we can use this variable as a data source to feed the ListView
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow() {

    }

    render() {
        return (
            // 12-2
            // Here we can render the ListView and tell what data to be viewed by assigning
            //   the ListView's dataSource props to the dataSource variable that we've created before
            // And lastly we can tell the ListView HOW to render our data by setting the renderRow
            //   props to a function
            // That function will contain a way to render our data to the screen
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
