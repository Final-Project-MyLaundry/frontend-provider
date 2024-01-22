import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardTransaction({transactions }) {
    const content = ({ item, index }) => (
        <>
                <TouchableOpacity key={index}>
                    <View style={styles.cardOrder} key={index} >
                        <Image
                            source={require('../../assets/transaction.png')}
                            style={{ width: 50, height: 50, marginTop: 5 }}
                        />
                        <View style={styles.orderText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>No : {item.orderId}</Text>
                            <Text>Amount : Rp. {item.amount}</Text>
                            <Text>Description :<Text style={{ color:  item.description == 'IN' ? 'green' : 'red', fontWeight: 'bold' }}> {item.description}</Text></Text>
                        </View>
                    </View>
                </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={content}
                keyExtractor={item => item._id}
            />
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
