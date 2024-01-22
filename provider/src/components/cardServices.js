import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardServices({ services }) {
    const content = ({ item, index }) => (
        <>
            <TouchableOpacity key={index}>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={require('../../assets/order.png')}
                        style={{ width: 40, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {item.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Price : Rp. {item.price}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            {services?.length == 0 ? (
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>No Services yet, Please add services!</Text>
            ) : (
                <FlatList
                    data={services}
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
        flexDirection: 'row', // Baris untuk memisahkan saldo dan tombol klaim
        borderColor: "gray",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
});
