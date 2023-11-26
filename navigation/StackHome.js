import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screen/Home";
import ProductDetails from "../Screen/ProductDetails";

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
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Details"
        component={productDetails}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default StackHome;
