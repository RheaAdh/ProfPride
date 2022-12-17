import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import User from './pages/User';

import Profile from './pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Router from './navigation';

const App = () => {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
};
export default App;
