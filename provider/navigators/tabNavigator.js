import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AddNewPostScreen from '../screens/addNewPostScreen';
// import LogoutButton from '../src/components/logoutButton';
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
        
        // else if (route.name === 'New Post') {
        //     iconName = 'add';
        //   } else if (route.name === 'Setting') {
        //     iconName = 'settings';
        //   }

          return <Ionicons name={iconName} size={size} color={focused ? 'black' : color} />;
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
      
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle: "Home"}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      {/* <Tab.Screen name="New Post" component={AddNewPostScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} /> */}
    </Tab.Navigator>
  );
}

