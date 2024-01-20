import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
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
                    headerTitle: () => (
                        <Image
                            source={require('../assets/mylaundry.png')} 
                            style={{ width: 120, height: 30, marginTop: 15 }} 
                        />
                    ),
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: () => (
                        <Image
                            source={require('../assets/mylaundry.png')} 
                            style={{ width: 120, height: 30, marginTop: 15 }} 
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

