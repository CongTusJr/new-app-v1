import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "../Screen/ProductDetails";
import Home from "../Screen/Home";

const Stack = createStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackHome;
