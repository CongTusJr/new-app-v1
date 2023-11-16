import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Product from '../Screen/Product';
import Wishlist from '../Screen/Wishlist';
import User from '../Screen/User';
import Cart from '../Screen/Cart';
import StackHome from './StackHome';

const Tab = createBottomTabNavigator();

export default function TabButtomScreem() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreem"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeScreem') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'User') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Product') {
                        iconName = focused ? 'pricetag' : 'pricetag-outline';
                    } else if (route.name === 'Wishlist') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FFB6C1',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: [{ display: 'flex' }, null],
            })}
        >
            <Tab.Screen
                name="HomeScreem"
                component={StackHome}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Wishlist" component={Wishlist} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
