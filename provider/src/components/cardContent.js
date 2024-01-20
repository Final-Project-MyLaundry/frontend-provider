import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function CardContent() {
 

    return (
        <Text>CardContent</Text>
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
    positionUserImage: {
        flex: 1 / 3
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 30,
    },
    textContent: {
        flex: 2,
    },
    author: {
        fontWeight: "bold",
        fontSize: 20
    },
    contentImage: {
        flex: 1,
        height: 200,
        borderRadius: 8,
        marginTop: 5
    },
    icon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    modalContainer: {
        marginTop: 50
    }
});
