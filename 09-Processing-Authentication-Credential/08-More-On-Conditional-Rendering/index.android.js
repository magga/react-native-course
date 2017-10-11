import { AppRegistry } from 'react-native';
import App from './src/app';

// 8-2
// We redirect our app whenever it start in Android to app.js inside the src folder
// We do the same to our iOS code too
AppRegistry.registerComponent('auth', () => App);
