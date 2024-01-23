import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardReview from "./cardReview";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import Modal from "react-native-modal";
import { SelectList } from 'react-native-dropdown-select-list'
import { LoginContext } from "../../context/loginContext";

export default function CardServices({ services, fetchOutlet }) {
    // console.log(services);
    const route = useRoute()
    const {id} = route.params
    // console.log(route.params);


    const {URL, isLogin} = useContext(LoginContext)
    const [isModalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'EXPRESS' },
        { key: '2', value: 'SETRIKA' },
        { key: '3', value: 'CUCI SETRIKA' },
        { key: '4', value: 'CUCI' },
        { key: '5', value: 'CUCI SEPATU' }
    ]
    const toggleModal = async () => {
        const response = await fetch(URL + '/services', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify({ name: selected, price, description, outletId : id })
        })

        if (response.ok) {
            setModalVisible(!isModalVisible);
            fetchOutlet()
        }
    };

    const openModal = () => {
        setModalVisible(!isModalVisible);
    }

    const navigation = useNavigation()
    const content = ({ item, index }) => (
        <>
            <TouchableOpacity key={index}>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={require('../../assets/order.png')}
                        style={{ width: 40, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {item.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Price : Rp. {item.price}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.containerServices}>

            <View style={styles.container}>
                {services?.services?.length === 0 ? (
                    <Text style={styles.noServiceText}>No Services yet, Please add services!</Text>
                ) : (
                    <FlatList
                        data={services?.services}
                        renderItem={content}
                        keyExtractor={item => item._id}
                    />
                )}
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#0C94D2',
                borderRadius: 8,
                paddingVertical: 8,
                paddingHorizontal: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -10,
                marginRight: 5,
                marginBottom: -10,
                alignSelf: 'flex-end'
            }} onPress={openModal} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Add More Service</Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} style={styles.modalView}
            >
                <View style={styles.centeredView}>
                    <SelectList styles={{ width: 300 }}
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                    />
                    <View style={styles.inputContainer}>
                        {/* <Text style={styles.label}>Price :</Text> */}
                        <TextInput
                            style={styles.input}
                            onChangeText={setPrice}
                            placeholder="Enter Price"
                            value={price}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        {/* <Text style={styles.label}>Description :</Text> */}
                        <TextInput
                            style={styles.input}
                            onChangeText={setDescription}
                            placeholder="Enter Description"
                            value={description}
                        />
                    </View>

                    <TouchableOpacity onPress={toggleModal} style={{
                         backgroundColor: '#0C94D2',
                         borderRadius: 8,
                         paddingVertical: 8,
                         paddingHorizontal: 12,
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginTop: -10,
                         marginRight: 5,
                         marginBottom: -10,
                    }}><Text  style={{ color: 'white', fontWeight: 'bold' }}>
                        Tutup
                    </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Text style={{ fontWeight: 'bold', borderBottomWidth: 1, paddingBottom: 5 }}>Review :</Text>
            <CardReview reviews={services?.reviews} />
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    containerServices: {
        marginTop: -20,
        flexDirection: 'column',  // Perbaikan pada properti flexDirection
        flex: 1,
        padding: 20,
        justifyContent: 'center',  // Tengah secara vertikal
    },
    container: {
        marginTop: -20,
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        justifyContent: 'center',  // Tengah secara horisontal
    },
    cardOrder: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: 80,
        flexDirection: 'row',
        borderColor: "gray",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
    noServiceText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 100,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginBottom: -5,
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },
});
