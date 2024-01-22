import { StyleSheet, View } from "react-native";
import CardOrder from "../src/components/cardOrder";
import CardOutlet from "../src/components/cardOutlet";


export default function MyOutletScreen() {
    return (
        <View style={styles.container}>
            <CardOutlet />
            <CardOrder />
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
