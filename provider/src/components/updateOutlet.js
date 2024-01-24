import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { LoginContext } from "../../context/loginContext";


export default function UpdateOutlet() {
    const route = useRoute()
    const { id } = route.params

    const navigation = useNavigation()
    const [outlet, setOutlet] = useState({
        name: '',
        address: {
            street: '',
            village: '',
            distric: '',
            city: ''
        },
        phone: '',
    })

    
    const { isLogin, URL } = useContext(LoginContext)

    const fetchOutlet = async () => {
        const response = await fetch(URL + '/outlets/provider/' + id, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        const newData = {
            name: data[0].name,
            address: {
                street: data[0]?.address?.street,
                village: data[0]?.address?.street,
                distric: data[0]?.address?.street,
                city: data[0]?.address?.street
            },
            phone: data[0]?.phone,
        }    
        setOutlet(newData)
    }

    const handleOnClick = async () => {
        const response = await fetch(URL + '/outlets/' + id, {
            method: "PUT",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify(outlet)
        })
        if (response.ok) {
            ToastAndroid.showWithGravity('Add outlet success!', ToastAndroid.LONG, ToastAndroid.TOP)
            navigation.navigate("Outlet")
        }
    }
    useEffect(() => {
        fetchOutlet()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <ScrollView>
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Name :</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, name: text })}
                            placeholder="Enter name"
                            value={outlet?.name}
                        />
                    </View>
                    <Text style={styles.label}>Address : </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, address: { ...outlet.address, street: text } })}
                            placeholder="Enter street"
                            value={outlet?.address?.street}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, address: { ...outlet.address, village: text } })}
                            placeholder="Enter village"
                            value={outlet?.address?.village}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, address: { ...outlet.address, district: text } })}
                            placeholder="Enter district"
                            value={outlet?.address?.district}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, address: { ...outlet.address, city: text } })}
                            placeholder="Enter city"
                            value={outlet?.address?.city}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Phone :</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOutlet({ ...outlet, phone: text })}
                            placeholder="Enter phone"
                            value={outlet?.phone}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={handleOnClick}
                    style={styles.button}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Update</Text>
                </TouchableOpacity>
            </ScrollView>
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
        marginLeft: 12
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
