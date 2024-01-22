import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardOutlet() {

    const outlet = [
        {
            outletId: 1,
            name: "Outlet A",
            "address": {
                "street": "Jln. 123 Main Street",
                "village": "Pondok Indah",
                "district": "District X",
                "city": "City Z"
            },
            "description": "A wonderful outlet offering various services.",
            "status": "Open"
        },
        {
            outletId: 2,
            name: "Outlet B",
            "address": {
                "street": "Jln 456 Elm Street",
                "village": "Kemang",
                "district": "District Y",
                "city": "City W"
            },
            "description": "Explore our high-quality services and friendly staff.",
            "status": "Closed"
        },
        {
            outletId: 3,
            name: "Outlet C",
            "address": {
                "street": "Jln 789 Oak Street",
                "village": "Cilandak",
                "district": "District Z",
                "city": "City X"
            },
            "description": "Your go-to place for top-notch services.",
            "status": "Open"
        }

    ]

    const navigation = useNavigation()
    const content = ({ item, index }) => (
        <>
            <TouchableOpacity key={index}>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={require('../../assets/outlet.png')}
                        style={{ width: 60, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>{item.address.street} {item.address.city}</Text>
                        <Text style={{ color: item.status === 'Completed' ? 'green' : 'red' }}>{item.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={outlet}
                renderItem={content}
                keyExtractor={item => item.outletId}
            />
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
