import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/Profile"
import Customer from "../pages/UserList"
import CustomerList from "../pages/UserList";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Customer" component={CustomerList} />
    </Stack.Navigator>
  );
}