import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardReview({ reviews }) {
    // console.log(reviews);
    const content = ({ item, index }) => (
        <>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg' }}
                        style={{ width: 40, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {item.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Rating : {item.rating}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{item.review}</Text>
                    </View>
                </View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            {reviews?.length == 0 ? (
                <Text style={styles.noReviewText}>No Review yet</Text>
            ) : (
                <FlatList
                    data={reviews}
                    renderItem={content}
                    keyExtractor={(item,i) => i}
                />
            )}
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    cardOrder: {
        borderColor: "#B6BBC4",
        borderTopWidth: 1,
        padding: 8,
        height: "auto",
        flexDirection: 'row',
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
    noReviewText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 120,
    },
});
