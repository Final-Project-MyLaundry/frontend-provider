import { StyleSheet, View } from "react-native";
import CardContent from "../src/components/cardSaldo";
import CardOrder from "../src/components/cardOrder";



export default function HomeScreen() {

    return <>
        <View style={styles.container}>
            <CardContent/>
            <CardOrder/>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});