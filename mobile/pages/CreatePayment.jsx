import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import { Stack, TextInput, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import api from '../utils/api.service';

const CreatePayment = ({ navigation, route }) => {
    const [amount, setAmount] = useState('');
    const [mode, setMode] = useState('');
    const [user, setUser] = useState({});
    let [booking, setBooking] = useState();

    async function createNewPayment() {
        const obj = {
            mode,
            amountPaid: amount,
        };
        console.log(obj);
        const res = await api.post(`/payment/${booking.id}`, obj, {
            crossOrigin: true,
        });
        console.log(res);
        alert('Added new payment');
    }

    useEffect(() => {
        setUser(route.params.user);
        setBooking(route.params.booking);
    }, []);

    return (
        <ScrollView>
            <Header title='Create Payment' />
            <Stack spacing={2} style={{ margin: 16 }}>
                <TextInput
                    label='Amount Paid'
                    variant='standard'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <TextInput
                    label='Mode of Payment'
                    variant='standard'
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                />
            </Stack>
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Submit'
                onPress={() => createNewPayment()}
            />
        </ScrollView>
    );
};

export default CreatePayment;
