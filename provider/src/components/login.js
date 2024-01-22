import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react"
import { LoginContext } from "../../context/loginContext";
import * as SecureStore from "expo-secure-store";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}
export default function Login() {
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setIsLogin, URL } = useContext(LoginContext)

    const handleOnClick = async () => {
        const response = await fetch(URL + '/users/login', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const result = await response.json()

        if (response.ok) {
            await save("access_token", result.access_token)
            setIsLogin(result.access_token)
            ToastAndroid.showWithGravity('Login success, Welcome to My Laundry!', ToastAndroid.LONG, ToastAndroid.TOP)
        } else {
            ToastAndroid.showWithGravity(result.message, ToastAndroid.LONG, ToastAndroid.TOP)
        }

    }
    return <>
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>Login with :</Text>

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder="Email"
            // value={username}
            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Password"
                // value={password}
                secureTextEntry
            />

            <TouchableOpacity onPress={handleOnClick}
                style={styles.button}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white'
                }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'black'
                }}>Don't have an account?
                </Text>
                <TouchableOpacity >
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#0C94D2'
                    }}
                        onPress={() => navigation.navigate('Register')}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    logo: {
        width: 120,
        height: 105,
        marginBottom: 20,
    },

    title: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 72
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: '#0C94D2',
        margin: 5,
        borderRadius: 10,
        width: 250,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    }
});