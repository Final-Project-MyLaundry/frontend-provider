import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import CardReview from "./cardReview";
import { useRoute } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-native-modal";
import { SelectList } from 'react-native-dropdown-select-list'
import { LoginContext } from "../../context/loginContext";

export default function CardServices({ services, fetchOutlet }) {
    // console.log(services);
    const route = useRoute()
    const { id } = route.params
    // console.log(route.params);


    const { URL, isLogin } = useContext(LoginContext)
    const [isModalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [selected, setSelected] = React.useState("");
    const [data, setData] = useState([]);


    const fetchService = async () => {
        const response = await fetch(URL + '/services', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        const newData = data.map((item) => ({ key: item.id, value: item.name }));
        setData(newData)
    }

    useEffect(() => {
        fetchService()
    })

    const handleSubmit = async () => {
        const response = await fetch(URL + '/services', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify({ name: selected, price, description, outletId: id })
        })

        if (response.ok) {
            ToastAndroid.showWithGravity('Add service success!', ToastAndroid.LONG, ToastAndroid.TOP)
            setModalVisible(!isModalVisible);
            fetchOutlet()
            setSelected("")
            setPrice("")
            setDescription("")
        }
    };

    const openModal = () => {
        setModalVisible(!isModalVisible);
    }

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

            <Modal isVisible={isModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.cardModal} >
                    <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }}>Add New Service : </Text>
                        <SelectList
                            setSelected={setSelected}
                            data={data}
                            save="value"
                            label="Categories"
                        />
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPrice}
                                placeholder="Enter Price"
                                value={price}
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDescription}
                                placeholder="Enter Description"
                                value={description}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={handleSubmit} style={{
                            backgroundColor: '#0C94D2',
                            borderRadius: 8,
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                            marginRight: 5,
                            marginBottom: -10,
                            width: 100
                        }}><Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openModal} style={{
                            backgroundColor: '#E3651D',
                            borderRadius: 8,
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                            marginRight: 5,
                            marginBottom: -10,
                            width: 100
                        }}><Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        width: 330,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },

    cardModal: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: "auto",
        flexDirection: 'column',
        borderColor: "gray",
        borderWidth: 1,
    },
});
