import { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/loginContext";
import DetailOutlet from "../src/components/detailOutlet";
import { useRoute } from "@react-navigation/core";
import CardServices from "../src/components/cardServices";
import { useFocusEffect } from '@react-navigation/native';


export default function DetailOutletScreen() {
    // console.log(id);
    const route = useRoute()
    const { id } = route.params
    const { isLogin, URL } = useContext(LoginContext)
    const [outlet, setOutlet] = useState([])

    const fetchOutlet = async () => {
        const response = await fetch(URL + '/outlets/provider/' + id, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        setOutlet(data)
    }
    useFocusEffect(
        useCallback(() => {
            fetchOutlet()
        }, [])
      );
    return (
        <>
            <DetailOutlet outlet={outlet} fetchOutlet={fetchOutlet} />
            <CardServices services={outlet[0]} fetchOutlet={fetchOutlet}/>
        </>
    )
}
