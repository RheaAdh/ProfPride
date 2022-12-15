import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/Profile"
import Customer from "../pages/Customer"

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
      <Stack.Screen name="Customer" component={Customer} />
    </Stack.Navigator>
  );
}