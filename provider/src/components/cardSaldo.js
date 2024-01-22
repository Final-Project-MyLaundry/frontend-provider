import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/loginContext";

export default function CardContent() {
    const { isLogin, URL } = useContext(LoginContext)
    const [profile, setProfile] = useState([])

    const fetchData = async () => {
        const response = await fetch(URL + '/users/provider', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        setProfile(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.textContent}>
                        <Text style={styles.welcome}>WELCOME</Text>
                        <Text >{profile?.name}</Text>
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
                        <Text style={styles.saldoText}>Saldo     :  Rp. {profile?.saldo}</Text>
                        <Text style={styles.nameText}>Name       :  {profile?.name}</Text>
                    </View>
                    <TouchableOpacity style={styles.claimButton}>
                        <Text style={styles.claimButtonText}>Claim</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: 'bold', borderBottomWidth: 1, paddingBottom: 5 }}>List Of New Orders :</Text>
            </ScrollView>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: "#D4D4D4",
        borderTopWidth: 1,
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
