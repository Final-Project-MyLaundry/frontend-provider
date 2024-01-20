import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { Image, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const navigation = useNavigation()

    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    return <>
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>Login with :</Text>

            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                placeholder="Email"
                value={username}
            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Password"
                value={password}
                secureTextEntry
            />

            <TouchableOpacity onPress={"handleOnClick"}
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
        height: 110,
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