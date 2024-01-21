import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardTransaction() {
    const orders = [
        {
            orderId: "1",
            customerName: "John Doe",
            "items": [
                {
                    "itemId": "101",
                    "itemName": "T-Shirt",
                    "quantity": 3
                },
                {
                    "itemId": "102",
                    "itemName": "Jeans",
                    "quantity": 2
                }
            ],
            totalAmount: 50.00,
            "pickupDate": "2024-01-20",
            "deliveryDate": "2024-01-22",
            status: "Pending",
            description : "Order laundry"
        },
        {
            orderId: "2",
            customerName: "Jane Smith",
            "items": [
                {
                    "itemId": "201",
                    "itemName": "Dress",
                    "quantity": 1
                },
                {
                    "itemId": "202",
                    "itemName": "Blouse",
                    "quantity": 2
                }
            ],
            totalAmount: 35.00,
            "pickupDate": "2024-01-21",
            "deliveryDate": "2024-01-23",
            status: "Processing",
            description : "Order laundry"

        },
        {
            orderId: "3",
            customerName: "Bob Johnson",
            "items": [
                {
                    "itemId": "301",
                    "itemName": "Socks",
                    "quantity": 5
                },
                {
                    "itemId": "302",
                    "itemName": "Shorts",
                    "quantity": 3
                }
            ],
            totalAmount: 28.50,
            "pickupDate": "2024-01-22",
            "deliveryDate": "2024-01-25",
            status: "Completed",
            description : "Order laundry"

        },
        {
            orderId: "4",
            customerName: "Bob Johnson",
            "items": [
                {
                    "itemId": "301",
                    "itemName": "Socks",
                    "quantity": 5
                },
                {
                    "itemId": "302",
                    "itemName": "Shorts",
                    "quantity": 3
                }
            ],
            totalAmount: 28.50,
            "pickupDate": "2024-01-22",
            "deliveryDate": "2024-01-25",
            status: "Completed",
            description : "Order laundry"
        },
        {
            orderId: "5",
            customerName: "Bob Johnson",
            "items": [
                {
                    "itemId": "301",
                    "itemName": "Socks",
                    "quantity": 5
                },
                {
                    "itemId": "302",
                    "itemName": "Shorts",
                    "quantity": 3
                }
            ],
            totalAmount: 28.50,
            "pickupDate": "2024-01-22",
            "deliveryDate": "2024-01-25",
            status: "Completed",
            description : "Order laundry"

        }, { orderId: "6", status: "Pending", description : "-"  }, { orderId: "7", status: "Pending", description : "-" }, { orderId: "8", status: "Pending", description : "-" }
    ]

    const navigation = useNavigation()
    const content = ({ item, index }) => (
        <>
                <TouchableOpacity key={index}>
                    <View style={styles.cardOrder} key={index} >
                        <Image
                            source={require('../../assets/transaction.png')}
                            style={{ width: 50, height: 50, marginTop: 5 }}
                        />
                        <View style={styles.orderText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Transactions No : 123456{index + 1}</Text>
                            <Text>Amount : Rp. {item.totalAmount}</Text>
                            <Text>Description : {item.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={orders}
                renderItem={content}
                keyExtractor={item => item.orderId}
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
