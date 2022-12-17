import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import { Stack, TextInput, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import api from '../utils/api.service';
const CreateUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo1, setPhoneNo1] = useState('');
    const [phoneNo2, setPhoneNo2] = useState('');
    const [aadharLink, setAadharLink] = useState('');
    const [deposit, setDeposit] = useState(null);

    async function createNewUser() {
        const obj = {
            name: name,
            email: email,
            phoneNo1: phoneNo1,
            phoneNo2: phoneNo2,
            aadharLink: aadharLink,
            deposit: deposit,
        };
        console.log(obj);
        const res = await api.post('/user', obj, { crossOrigin: true });
        console.log(res);
        alert('Added new user');
    }

    return (
        <ScrollView>
            <Header title='Create User' />
            <Stack spacing={2} style={{ margin: 16 }}>
                <TextInput
                    label='Name'
                    variant='standard'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        console.log(e.target.value);
                    }}
                />
                <TextInput
                    label='Email'
                    variant='standard'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                    label='Phone Number 1'
                    variant='standard'
                    value={phoneNo1}
                    onChange={(e) => setPhoneNo1(e.target.value)}
                />
                <TextInput
                    label='Phone Number 2'
                    variant='standard'
                    value={phoneNo2}
                    onChange={(e) => setPhoneNo2(e.target.value)}
                />
                <TextInput
                    label='Initial Deposit'
                    variant='standard'
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                />
                <TextInput
                    label='Aadhar Link'
                    variant='standard'
                    value={aadharLink}
                    onChange={(e) => setAadharLink(e.target.value)}
                />
            </Stack>
            <Button
                style={{ marginBottom: 10 }}
                variant='outlined'
                title='Submit'
                onPress={() => createNewUser()}
            />
        </ScrollView>
    );
};

export default CreateUser;
