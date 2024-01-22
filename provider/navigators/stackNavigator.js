import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import TabNavigator from "./tabNavigator";
import { useContext } from 'react';
import { LoginContext } from '../context/loginContext';
import AddOutletScreen from '../screens/addOutletScreen';
// import DetailContentScreen from '../screens/detailContentScreen';

export default function StackNavigator() {
    const { isLogin } = useContext(LoginContext)
    // const isLogin = true

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>


            {isLogin ? (
                <>
                    <Stack.Screen name="Home" component={TabNavigator} />
                    <Stack.Screen name='AddOutlet' component={AddOutletScreen} options={{ headerShown: true }}/>
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}

        </Stack.Navigator>
    )
}