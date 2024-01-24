import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/FontAwesome5';
import MyOutletScreen from '../screens/myOutletScreen';
import LogoutButton from '../src/components/logoutButton';
import AllOrdersScreen from '../screens/allOrdserScreen';
const Tab = createBottomTabNavigator();

const headerTitle = () => (
    <Image
        source={require('../assets/mylaundry.png')} 
        style={{ width: 120, height: 30, marginTop: 15 }} 
    />
)

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = 'home';
                    } else if(route.name === 'Orders'){
                        iconName = 'list'
                    }else if (route.name === 'Outlet') {
                        iconName = 'storefront-outline'
                    }else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={focused ? '#0C94D2' : color} />;
                },
                tabBarLabel: () => null,
            })}
            tabBarStyle={{
                position: 'absolute',
                bottom: 10,
                backgroundColor: 'white',
                height: 50,
            }}
            tabBarActiveTintColor="black"
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerTitle: headerTitle
                }} />
            <Tab.Screen
                name="Outlet"
                component={MyOutletScreen}
                options={{
                    headerTitle : headerTitle
                  }}
            />
            <Tab.Screen
                name="Orders"
                component={AllOrdersScreen}
                options={{
                    headerTitle: headerTitle
                }}
            />
                <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: headerTitle,
                    headerRight: () => (<LogoutButton/>),
                }}
            />
        </Tab.Navigator>
    );
}

