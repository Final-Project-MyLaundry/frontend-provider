import { StyleSheet, View } from "react-native";
import CardProfile from "../src/components/cardProfile";
import CardTransaction from "../src/components/cardTransaction";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/loginContext";

export default function ProfileScreen() {

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
// console.log(data);
    return (
        <View style={styles.container}>
        
        <CardProfile profile={profile}/>
        <CardTransaction transactions={profile.transactions}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffffff', 
    },
});
