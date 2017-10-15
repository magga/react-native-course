import React, { Component } from 'react';
import { View } from 'react-native';
// 11-6 - Fourth Step
// Don't forget to import the connect function from the react-redux library
import { connect } from 'react-redux';

// 11-6 - First Step
// The design here is that we want to display our data (in this case the Libraries Wiki)
//   in the LibraryList component
// But as we know (see the design image from previous section) that all of our data
//   is stored in the State that's wrapped by Store
// So in this section we want to learn how to "connect" the State to the React Component
//   (in this case to the LibraryList component)
class LibraryList extends Component {
    render() {
        // 11-6 - Fifth Step
        // And lastly, we can access that data (state) by accessing the LibraryList' props
        console.log(this.props);
        return <View />;
    }
}

// 11-6 - Second Step
// To get the data, we can use a helper method to get that data from the State
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// 11-6 - Third Step
// Now that we have that data in the form of a variable called "mapStateToProps"
//   (remember that it's name can be changed to anthing you want), the next (and the most important)
//   things is to find out how to pass this data to the LibraryList component
// To pass the "Redux" data to the "React" component, is one of the purpose of
//   having a 'react-redux' library
// We can use a connect() function
// As the name imply, the connect() function is used to "connect" the data to the React component
// The syntax here is rather odd
// The syntax tell the program to connect the data (mapStateToProps, as a function) and pass 
//   that function's return to the LibraryList class (pass it with a function too)
// Now the next question is, after we pass the data to the LibraryList, how can we access that data
//   inside the LibraryList class?
// The answer is, again - as the name imply -mapStateToProps-, we can access that data in 
//   the LibraryList class by using props
export default connect(mapStateToProps)(LibraryList);
