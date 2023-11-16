import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import StackScreem from './navigation/StackScreem';
import TabButtomScreem from './navigation/TabButtomScreem';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StackScreem />
        </GestureHandlerRootView>
    );
};

export default App;
