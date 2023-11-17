import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TabButtomScreen from "./TabButtomScreen";
import Login from "../Screen/Login";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="tab"
          component={TabButtomScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
