import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, TextInput, Button } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Loading from '../components/Loading';
import Header from '../components/Header';
import api from '../utils/api.service';

import { ScrollView } from 'react-native';

const name = 'Rhea Adhikari';

export default function User({ navigation }) {
    let [search, setSearch] = useState('');
    let [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            setLoading(true);
            const res = await api.get('/user', { crossOrigin: true });
            console.log('resulttttttttt', res);
            setUsers(res);
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
        fetchData();
        console.log('users', users);
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header title='Users' />

            <TextInput
                label='Search User'
                style={{ margin: 16 }}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Add User'
                onPress={() => navigation.navigate('CreateUser')}
            />
            {users.map((user) => (
                <ListItem
                    title={user.name}
                    secondaryText={`PhoneNo = ${user.phoneNo1}`}
                    onPress={() =>
                        navigation.navigate('Profile', {
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
}
