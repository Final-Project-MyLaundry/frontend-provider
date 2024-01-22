import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardOutlet({ outlet }) {
    const navigation = useNavigation()
    const renderContent = ({ item, index }) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailOutlet', { id: item._id })}>
            <View style={styles.cardOrder} key={index} >
                <Image
                    source={require('../../assets/outlet.png')}
                    style={{ width: 60, height: 50, marginTop: 5 }}
                />
                <View style={styles.orderText}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{item.address.street} {item.address.city}</Text>
                    {item.statusOpen ? (
                        <Text style={{ color: 'green', fontWeight: 'bold' }}>BUKA</Text>
                    ) : (
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>TUTUP</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {outlet.length === 0 ? (
                <View style={styles.centerContainer}>
                    <Text style={{ fontSize: 15 }}>There are no outlets yet,</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>let's register your outlet now!</Text>
                </View>
            ) : (
                <FlatList
                    data={outlet}
                    renderItem={renderContent}
                    keyExtractor={(item) => item._id}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
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
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
