import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CardProfile from "../src/components/cardProfile";
import CardTransaction from "../src/components/cardTransaction";


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
        
        <CardProfile/>
        <CardTransaction/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },
});
