import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import TabNavigator from "./tabNavigator";
// import { useContext } from 'react';
// import { LoginContext } from '../context/loginContext';
// import DetailContentScreen from '../screens/detailContentScreen';

export default function StackNavigator() {
    // const { isLogin } = useContext(LoginContext)
    const isLogin = true

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={TabNavigator} />

            {/* {isLogin ? (
                <>
                </>
            ) : (
                <>

                </>
            )} */}
            
        </Stack.Navigator>
    )
}