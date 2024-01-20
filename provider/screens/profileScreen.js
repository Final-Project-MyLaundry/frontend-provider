import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";


export default function ProfileScreen() {

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
    const content = ({ item }) => (
        <View style={styles.content}>
                    <Image
                    source={{ uri: 'https://i.pinimg.com/564x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg' }}
                    style={styles.userImage}
                />

            <View style={styles.textContent}>
                <Text style={styles.user}>BAMBANG</Text>
                <Text>BAMBANG</Text>

                <View style={styles.follow}>
                <Text style={{marginRight: 5}}> Followers</Text>
                <Text>Following</Text>
                </View>
            </View>
        </View>
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
    },
    content: {
        borderColor: "#B6BBC4",
        borderWidth: 1,
        padding: 8,
        height: "auto",
        flexDirection: 'row',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    textContent: {
        flex: 2,
    },
    user: {
        fontWeight: "bold",
        fontSize: 20
    },
    contentImage: {
        flex: 1,
        height: 200,
        borderRadius: 8,
        marginTop: 5
    },
    follow: {
        flexDirection: "row",
        marginTop: 10,
    }
});
