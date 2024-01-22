import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/loginContext";

export default function CardOrder() {

    const {isLogin, URL} = useContext(LoginContext)
    const [order, setOrder] = useState([])

    const fetchOrder = async () => {
        const response = await fetch( URL + '/orders/provider/waiting', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const result = await response.json()
        // console.log(result, "ini result");
        setOrder(result)
    }

    useEffect(() => {
        fetchOrder()
    }, [])

    const content = ({ item, index }) => (
        <>
             <TouchableOpacity key={index}>
             <View style={styles.cardOrder} key={index} >
                 <Image
                     source={require('../../assets/order.png')}
                     style={{ width: 40, height: 50, marginTop: 5 }}
                 />
                 <View style={styles.orderText}>
                     <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Pesanan No : {item._id}</Text>
                     <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Outlet : {item.outlet}</Text>
                     <Text style={{ color: item.status === 'Completed' ? 'green' : 'red', fontWeight: 'bold' }}>{item.progress}</Text>
                 </View>
             </View>
         </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
        {order.length == 0 ? (
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>No order yet</Text>
        ):(
            <FlatList
                data={order}
                renderItem={content}
                keyExtractor={item => item._id}
            />
        )}
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        marginTop : -20,
        flexDirection: 'row',
        flex: 1,
        padding: 20,
    },
    cardOrder: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: 80,
        flexDirection: 'row', // Baris untuk memisahkan saldo dan tombol klaim
        borderColor: "gray",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
});
