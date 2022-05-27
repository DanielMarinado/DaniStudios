/**
 * @format
 */
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './src/navigation/';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Cannot record touch end without a touch start.'])

AppRegistry.registerComponent(appName, () => App);
