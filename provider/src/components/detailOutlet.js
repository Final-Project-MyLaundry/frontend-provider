import { useContext, useState } from "react";
import { Button, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { LoginContext } from "../../context/loginContext";


export default function DetailOutlet({ outlet, fetchOutlet }) {

    const { isLogin, URL } = useContext(LoginContext)

    const handleClick = async () => {
        const response = await fetch(URL + '/outlets/open/' + outlet[0]?._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + isLogin
            }
        })
        if (response.ok) {
            fetchOutlet()
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.positionUserImage} >
                        <Image
                            source={require('../../assets/outlet.png')}
                            style={{ width: 100, height: 95 }}
                        />
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.welcome}>{outlet[0]?.name} </Text>
                        <Text>{outlet[0]?.address.street} {outlet[0]?.address.village} {outlet[0]?.address.district} {outlet[0]?.address.city}</Text>

                        <View style={{ flexDirection: 'row'}}>
                            {outlet[0]?.statusOpen ? (
                                <TouchableOpacity style={{
                                    backgroundColor: 'green',
                                    borderRadius: 8,
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginRight: 10
                                }} onPress={handleClick}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>BUKA</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={{
                                    backgroundColor: '#E3651D',
                                    borderRadius: 8,
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginRight: 10
                                }} onPress={handleClick}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>TUTUP</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={{
                                backgroundColor: '#0C94D2',
                                borderRadius: 8,
                                paddingVertical: 8,
                                paddingHorizontal: 12,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10,
                                marginRight: 10
                            }} onPress={handleClick}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> 
                <Text style={{ fontWeight: 'bold', borderBottomWidth: 1, paddingBottom: 5 }}>Services :</Text>
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
