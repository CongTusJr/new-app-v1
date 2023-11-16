import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabButtomScreem from './TabButtomScreem';
import Login from '../Screen/Login';

const Stack = createStackNavigator();

function StackScreem() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="tab"
                    component={TabButtomScreem}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackScreem;
