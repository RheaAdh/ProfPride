import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, TextInput, Button } from '@react-native-material/core';
import { ScrollView, Text } from 'react-native';
import api from '../utils/api.service';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';

const Payments = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    const [booking, setBooking] = useState({});
    const [loading, setLoading] = useState(true);
    let [payments, setPayments] = useState([]);

    async function fetchData() {
        try {
            console.log(`/payment/${route.params.booking.id}`);
            setLoading(true);
            const res = await api.get(`/payment/${route.params.booking.id}`, {
                crossOrigin: true,
            });
            setPayments(res[0].payments);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            Toast.show({
                type: 'error',
                text1: err.response.data.error,
            });
        }
    }

    useEffect(() => {
        setUser(route.params.user);
        setBooking(route.params.booking);
        fetchData();
    }, []);

    return (
        <ScrollView>
            <Header title={user.name} />
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Add New Payment'
                onPress={() =>
                    navigation.navigate('CreatePayment', {
                        user: user,
                        booking: booking,
                    })
                }
            />
            {payments.map((payment) => (
                <ListItem
                    title={payment.id}
                    secondaryText={`amount: ${payment.amountPaid} | mode: ${payment.mode}`}
                    // onPress={() =>
                    //     navigation.navigate('Payments', {
                    //         booking: booking,
                    //         user: user,
                    //     })
                    // }
                    // trailing={(props) => (
                    //     <Icon name='chevron-right' {...props} />
                    // )}
                />
            ))}
        </ScrollView>
    );
};

export default Payments;
