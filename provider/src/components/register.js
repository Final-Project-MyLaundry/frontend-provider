import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput,ToastAndroid, TouchableOpacity, View } from 'react-native';
import { LoginContext } from "../../context/loginContext";


export default function Register() {
    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { URL } = useContext(LoginContext)

    const handleOnClick = async () => {
        const response = await fetch(URL + '/users/register', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const result = await response.json()

        if (response.ok) {
            ToastAndroid.showWithGravity('Register success, Please Login to My Laundry!', ToastAndroid.LONG, ToastAndroid.TOP)
            navigation.navigate('Login')
        }else {
            ToastAndroid.showWithGravity(result.message, ToastAndroid.LONG, ToastAndroid.TOP)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>Create Your Account :</Text>

            <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder="Name"
                value={name}
            />

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder="Email"
                value={email}
            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Password"
                value={password}
                secureTextEntry
            />

            <TouchableOpacity onPress={handleOnClick}
                style={styles.button}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white'
                }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'black'
                }}>Already have account?
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#0C94D2'
                    }} onPress={() => navigation.navigate('Login')}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
