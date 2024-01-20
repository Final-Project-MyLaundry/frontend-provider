import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardContent() {

    const data = [
        {
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
                    "paymentStatus": "DONE"
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
    ]

    const navigation = useNavigation()


    const content = ({ item }) => (
        <>
            <View style={styles.content}>
                <View style={styles.textContent}>
                    <Text style={styles.welcome}>WELCOME</Text>
                    <Text >{item.name}</Text>
                </View>
                <View style={styles.positionUserImage} >
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 80, height: 70 }}
                    />
                </View>

            </View>
            <View style={styles.card}>
                <View style={styles.saldoContainer}>
                    <Text style={styles.saldoText}>Saldo:    Rp. 1.000.000.000,00</Text>
                    <Text style={styles.nameText}>Name:      {item.name}</Text>
                </View>
                <TouchableOpacity style={styles.claimButton}>
                    <Text style={styles.claimButtonText}>Claim</Text>
                </TouchableOpacity>
            </View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={content}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 20,

    },
    content: {
        height: "auto",
        flexDirection: 'row',
    },
    positionUserImage: {
        flex: 1,
        marginLeft: 50
    },
    textContent: {
        flex: 2,
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 30
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        width: 'auto',
        height: 100,
        justifyContent: 'space-between', // Menggunakan space-between untuk memindahkan saldo ke pojok kiri atas
        alignItems: 'flex-start', // Menyusun elemen ke kiri
        flexDirection: 'row', // Baris untuk memisahkan saldo dan tombol klaim
        borderColor: "gray",
        borderWidth: 1,
        elevation: 7,
    },
    saldoContainer: {
        flex: 1, // Menggunakan flex untuk memberi ruang pada elemen saldo
    },
    saldoText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    claimButton: {
        backgroundColor: '#0C94D2',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    claimButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 14,
        color: 'gray',
    },
});
