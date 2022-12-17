import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, TextInput, Button } from '@react-native-material/core';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';

const Bookings = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    let [bookings, setBookings] = useState([]);

    async function fetchData() {
        try {
            console.log(`/booking/:${user.id}`);
            setLoading(true);
            const res = await api.get(`/booking/:${user.id}`, {
                crossOrigin: true,
            });
            console.log('resulttttttttt', res);
            setBookings(res.bookings);
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

    useEffect(async () => {
        console.log('here');
        setUser(route.params.user);
        fetchData();
        console.log('bookings', bookings);
    }, [bookings]);
    return (
        <ScrollView>
            <Header title={user.name + ' Bookings'} />
            {/* <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Payments'
            /> */}
            {bookings.map((booking) => (
                <ListItem
                    title={booking.id}
                    secondaryText={`cost = ${booking.cost}`}
                    onPress={() =>
                        navigation.navigate('Payments', {
                            booking: booking,
                        })
                    }
                    trailing={(props) => (
                        <Icon name='chevron-right' {...props} />
                    )}
                />
            ))}
        </ScrollView>
    );
};

export default Bookings;
