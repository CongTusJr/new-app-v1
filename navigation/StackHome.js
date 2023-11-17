import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "../Screen/productDetails";
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
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default StackHome;
