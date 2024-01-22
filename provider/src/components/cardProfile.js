import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/loginContext";


export default function CardProfile({profile}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.positionUserImage} >
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg' }}
                            style={{ width: 80, height: 70 }}
                        />
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.welcome}>{profile.name} </Text>
                        <Text>{profile.phone}</Text>
                        <TouchableOpacity >
                            <Text style={{color : '#0C94D2'}}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.saldoContainer}>
                        <Text style={styles.saldoText}>Saldo     :  Rp. {profile.saldo}</Text>
                        <Text style={styles.nameText}>Account   : {profile._id}</Text>
                    </View>
                    <TouchableOpacity style={styles.claimButton}>
                        <Text style={styles.claimButtonText}>Claim</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: 'bold', borderBottomWidth: 1, paddingBottom: 5 }}>History Of Transactions :</Text>
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
    },
    positionUserImage: {
        flex: 1,
    },
    textContent: {
        flex: 2,
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 20
    },
    card: {
        backgroundColor: '#0C94D2',
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
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderColor: "gray",
        borderWidth: 1,
        elevation: 7,
    },
    saldoContainer: {
        flex: 1,
        marginTop: 10,
    },
    saldoText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    claimButton: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    claimButtonText: {
        color: 'black',
        fontWeight: 'bold',

    },
    nameText: {
        fontSize: 14,
        color: 'white',
    }
});
