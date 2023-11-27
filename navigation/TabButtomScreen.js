import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import User from "../Screen/User";
import Cart from "../Screen/Cart";
import StackHome from "./StackHome";

const Tab = createBottomTabNavigator();

export default function TabButtomScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home Screen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFB6C1",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [{ display: "flex" }, null],
      })}
    >
      <Tab.Screen
        name="Home Screen"
        component={StackHome}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="User" component={User} options={{
            headerShown: false,
          }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
