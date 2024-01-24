import { StyleSheet, View } from "react-native";
import CardContent from "../src/components/cardSaldo";
import CardOrder from "../src/components/cardOrder";
import { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/loginContext";
import { useFocusEffect } from '@react-navigation/native';



export default function HomeScreen() {
    const {isLogin, URL} = useContext(LoginContext)
    const [order, setOrder] = useState([])

    const fetchOrder = async () => {
        const response = await fetch( URL + '/orders/provider/Waiting', {
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

    return <>
        <View style={styles.container}>
            <CardContent/>
            <CardOrder order={order}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});