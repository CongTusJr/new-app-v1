import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TabButtomScreen from "./TabButtomScreen";
import LoginScreen from "../Screen/Login";
import Singup from "../Screen/Singup";

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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Singup" component={Singup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
