import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardOrder({ order }) {
    const navigation = useNavigation()
    const content = ({ item, index }) => (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('DetailOrder', { id: item._id })}>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={require('../../assets/order.png')}
                        style={{ width: 40, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Pesanan No : {item._id}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Outlet : {item.outlet}</Text>
                        <Text style={{ color: item?.progress === 'Accepted' ? 'green' : 'red', fontWeight: 'bold' }}>{item?.progress}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            {order?.length == 0 ? (
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No order yet</Text>
            ) : (
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
        marginTop: -20,
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
        flexDirection: 'row',
        borderColor: "gray",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
});
