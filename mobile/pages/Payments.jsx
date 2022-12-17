import React from 'react';
import { Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';

const Payments = ({ navigation, route }) => {
    return (
        <ScrollView>
        <Header title='Payments' />
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Payments'
            />
        </ScrollView>
    );
};

export default Payments;
