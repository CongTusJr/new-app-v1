import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import StackScreen from "./navigation/StackScreen";
import TabButtomScreen from "./navigation/TabButtomScreen";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StackScreen />
    </GestureHandlerRootView>
  );
};

export default App;
