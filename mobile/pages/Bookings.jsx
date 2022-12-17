import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, TextInput, Button } from '@react-native-material/core';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import api from '../utils/api.service';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Bookings = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    let [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        try {
            console.log(`/booking/${route.params.user.id}`);
            setLoading(true);
            const res = await api.get(`/booking/${route.params.user.id}`, {
                crossOrigin: true,
            });
            setBookings(res[0].bookings);
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
        fetchData();
    }, []);
    return (
        <ScrollView>
            <Header title={user.name + ' Bookings'} />
            {bookings.map((booking) => (
                <ListItem
                    title={booking.id}
                    secondaryText={`cost: ${booking.cost} | mode: ${booking.mode}`}
                    onPress={() =>
                        navigation.navigate('Payments', {
                            booking: booking,
                            user: user,
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
