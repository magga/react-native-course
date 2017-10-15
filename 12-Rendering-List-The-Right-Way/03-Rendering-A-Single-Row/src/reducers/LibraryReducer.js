// 10-3
// Rather than typing out all the different "libraries" to show to the user,
//   just to keep this Reducer nice and clean, we're going to make a separate
//   file to store the list of "libraries"
// So inside the "reducers" folder, we make a new file called "LibraryList.json"

// Take a special note that the file will be a JSON file, not a js file
// The JSON file will be a dummy data file and store a JSON code, not a js code

// 10-3
// And since the file extension is .json, we have to specifically write it out
import data from './LibraryList.json';

export default () => data;

// 10-3
// So now because we have hooked the "libraries" Reducer to the "data" json file,
//   wherever we called, for example, a store.getState(), we expect it to return
//   an object like this :
//   { libraries: [ { id: 1, title: 'React', description: '............' }, {} ] }
