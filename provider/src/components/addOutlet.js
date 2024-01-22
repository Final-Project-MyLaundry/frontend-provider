import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { LoginContext } from "../../context/loginContext";


export default function AddOutlet() {
    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [address, setAddress] = useState({
        street: "",
        village: "",
        district: "",
        city: ""
    })
    const [phone, setPhone] = useState("")

    const {isLogin, URL } = useContext(LoginContext)

    const handleOnClick = async () => {
        const response = await fetch(URL + '/outlets', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify({ name, address, phone })
        })
        // console.log(response);
        if (response.ok) {
            ToastAndroid.showWithGravity('Add outlet success!', ToastAndroid.LONG, ToastAndroid.TOP)
            navigation.navigate("Outlet")
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder="Enter name"
                        value={name}
                    />
                </View>
                <Text style={styles.label}>Address</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Street :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddress({ ...address, street: text })}
                        placeholder="Enter street"
                        value={address.street}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>village :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddress({ ...address, village: text })}
                        placeholder="Enter village"
                        value={address.village}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>district :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddress({ ...address, district: text })}
                        placeholder="Enter district"
                        value={address.district}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>city :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddress({ ...address, city: text })}
                        placeholder="Enter city"
                        value={address.city}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPhone}
                        placeholder="Enter phone"
                        value={phone}
                        keyboardType="phone-pad"
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleOnClick}
                style={styles.button}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white'
                }}>Register</Text>
            </TouchableOpacity>
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
        width: 100,
        height: 90,
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 72
    },
    inputContainer: {
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginBottom: -5,
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#0C94D2',
        margin: 5,
        borderRadius: 10,
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    }
});
