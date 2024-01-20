import { StyleSheet, View } from "react-native";
import CardContent from "../src/components/cardContent";



export default function HomeScreen() {
    return <>
        <View style={styles.container}>
            <CardContent/>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },
});