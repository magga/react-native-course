import { AppRegistry } from 'react-native';
import App from './src/app';

// 8-2
// We redirect our app whenever it start in iOS to app.js inside the src folder
// We do the same to our Android code too
AppRegistry.registerComponent('auth', () => App);
