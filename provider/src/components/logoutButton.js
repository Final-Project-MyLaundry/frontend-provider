import { Text, TouchableOpacity } from "react-native";
// import * as SecureStore from "expo-secure-store"
// import { useContext } from "react";
// import { LoginContext } from "../../context/loginContext";
import { useNavigation } from "@react-navigation/core";

export default function LogoutButton() {
    // const { setIsLogin } = useContext(LoginContext)
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={async () => {
            // await SecureStore.deleteItemAsync('access_token')
            // setIsLogin(false)
            navigation.navigate('Login')
        }}>
            <Text style={{fontWeight: 'bold', color: 'red', marginRight: 15, marginBottom: -10}}>Logout</Text>
        </TouchableOpacity>
    )
}