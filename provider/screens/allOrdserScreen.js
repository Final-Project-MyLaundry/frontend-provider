import { StyleSheet, Text, View } from "react-native";
import { LoginContext } from "../context/loginContext";
import { useCallback, useContext, useEffect, useState } from "react";
import CardOrder from "../src/components/cardOrder";
import { useFocusEffect } from '@react-navigation/native';



export default function AllOrdersScreen() {


    const {isLogin, URL} = useContext(LoginContext)
    const [order, setOrder] = useState([])

    const fetchOrder = async () => {
        const response = await fetch( URL + '/orders/provider/outlet', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const result = await response.json()
        setOrder(result)
    }

    useFocusEffect(
        useCallback(() => {
            fetchOrder()
        }, [])
      );


    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>All Orders</Text>
            <CardOrder order={order} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
