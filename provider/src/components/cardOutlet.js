import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardOutlet() {

    const data = {
        _id: "65a8eb61cbca81fd2982c110",
        name: "wahyu ragil",
        email: "wahyu@gmail.com",
        password: "$2a$10$YwQOHyWZg/5OJsYRK7JtQejTvncBUDN0Tx8lmQqkbRUO//CzqyQku",
        address: {
            street: "Jln Tanah Kusir 4",
            village: "Pondok Indah",
            distric: "Kebayoran Lama",
            city: "Jakarta Selatan"
        },
        phone: "0899999999999",
        createdAt: "2024-01-18T09:14:02.820Z",
        updatedAt: "2024-01-18T09:14:02.820Z",
        transactions: [
            {
                "_id": "65aa54fe89bfdd99fe3f60c9",
                "userId": "65a8eb61cbca81fd2982c110",
                "description": "topup laundry",
                amount: 100.000,
                "paymentType": "Saldo",
                "paymentStatus": "DONE",
                accountNumber: "123-4567-89012345-6"
            }
        ],
        outlets: [
            {
                "_id": "65a7b482a9ba1cceb2bd830a",
                name: "Awesome Outlet",
                address: {
                    street: "123 Main Street",
                    village: "Pondok Indah",
                    district: "District X",
                    city: "City Z"
                },
                phone: "555-1234",
                services: [
                    {
                        name: "Service A",
                        "description": "Description A",
                        price: 20.000
                    },
                    {
                        name: "Service B",
                        "description": "Description B",
                        price: 30.000
                    }
                ],
                reviews: [
                    {
                        "userId": 1,
                        "rating": 4.5,
                        "review": "Great service!"
                    },
                    {
                        "userId": 2,
                        "rating": 5,
                        "review": "Excellent experience!"
                    }
                ],
                userId: "65a8eb61cbca81fd2982c110",
                statusOpen: false,
                createdAt: "2024-01-16T14:00:00Z",
                updatedAt: "2024-01-16T14:30:00Z",
                image: "https://res.cloudinary.com/dyumsoglj/image/upload/v1705504961/ewy8lui9rk3i4tacpr7w.jpg"
            }
        ]
    }
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Image
                        source={require('../../assets/outlet.png')}
                        style={{ width: 100, height: 100, marginRight: 10 }}
                    />

                    <View style={styles.textContent}>
                        <Text style={styles.user}>{data.outlets[0].name}</Text>
                        <Text>Alamat : {data.outlets[0].address.street}</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', borderTopWidth: 1, paddingTop: 5, paddingBottom: 5, marginTop: 10 }}>History Of Orders :</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderTopWidth: 1,
        borderColor: "#D4D4D4",
    },
    content: {
        height: "auto",
        flexDirection: 'row',
        marginTop : -5
    },
    positionUserImage: {
        flex: 1,
    },
    textContent: {
        flex: 2,
    },
    nameText: {
        fontSize: 14,
        color: 'black',
    },
    textContent: {
        flex: 2,
    },
    user: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },
    contentImage: {
        flex: 1,
        height: 200,
        borderRadius: 8,
        marginTop: 5
    }
});
