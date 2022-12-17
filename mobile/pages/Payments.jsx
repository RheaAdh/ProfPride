import React from 'react';
import { Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';

const Payments = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    const [booking, setBooking] = useState({});
    useEffect(() => {
        setUser(route.params.user);
        setBooking(route.params.booking);
    });
    return (
        <ScrollView>
            <Header title={user.name} />
        </ScrollView>
    );
};

export default Payments;
