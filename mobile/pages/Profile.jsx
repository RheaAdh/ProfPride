import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ScrollView } from 'react-native';
import { Stack, Avatar, Text } from '@react-native-material/core';
import Header from '../components/Header';

export default function Profile({ navigation, route }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(route.params.user);
    });
    return (
        <ScrollView>
            <Header title='Profile' />
            <Avatar label={user.name} autoColor />
            <Text variant='h6'>{user.phoneNo1}</Text>
            <Text variant='h6'>{user.phoneo2}</Text>
            <Text variant='h6'>{user.email}</Text>
            <Text variant='h6'>{user.deposit}</Text>
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Bookings'
                onPress={() => navigation.navigate('Bookings', { user: user })}
            />
        </ScrollView>
    );
}
