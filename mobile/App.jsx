import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerList from './pages/UserList';
import Header from './components/Header';
export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <CustomerList/>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
