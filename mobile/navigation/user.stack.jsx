import { createStackNavigator } from "@react-navigation/stack";

import User from "../pages/User";
import Profile from "../pages/Profile"

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="User"
    >
    <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
