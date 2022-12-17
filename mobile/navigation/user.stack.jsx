import { createStackNavigator } from '@react-navigation/stack';

import User from '../pages/User';
import Profile from '../pages/Profile';
import CreateUser from '../pages/CreateUser';
import Payments from '../pages/Payments';
import Bookings from '../pages/Bookings';
import CreatePayment from '../pages/CreatePayment';

const Stack = createStackNavigator();

export default function UserStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
            }}
            initialRouteName='User'>
            <Stack.Screen name='User' component={User} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='CreateUser' component={CreateUser} />
            <Stack.Screen name='CreatePayment' component={CreatePayment} />
            <Stack.Screen name='Payments' component={Payments} />
            <Stack.Screen name='Bookings' component={Bookings} />
        </Stack.Navigator>
    );
}
