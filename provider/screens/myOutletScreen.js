import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardOutlet from "../src/components/cardOutlet";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginContext } from "../context/loginContext";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";


export default function MyOutletScreen() {

    const navigation = useNavigation()

    const { isLogin, URL } = useContext(LoginContext)
    const [outlet, setOutlet] = useState([])

    const fetchOutlet = async () => {
        const response = await fetch( URL + '/outlets/provider', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })

        const data = await response.json();
        setOutlet(data)
    }

    useEffect(() => {
        fetchOutlet()
    }, [outlet])
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>My Outlet</Text>

                <CardOutlet outlet={outlet} />

            <TouchableOpacity
                style={styles.buttonAdddPost}
            onPress={() => navigation.navigate("AddOutlet")}
            >
                <Ionicons name="add" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: "#D4D4D4",
    },
    buttonAdddPost: {
        position: "absolute",
        bottom: 30,
        right: 40,
        zIndex: 1,
        borderRadius: 24,
        backgroundColor: "#1d9bf0",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
});
