import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/loginContext";
import { useRoute } from "@react-navigation/core";
import DetailOrder from "../src/components/detailOrder";

export default function DetailOrderScreen() {
    const route = useRoute()
    const { id } = route.params
    const { isLogin, URL } = useContext(LoginContext)
    const [order, setOrder] = useState([])

    const fetchOutlet = async () => {
        const response = await fetch(URL + '/orders/' + id, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        console.log(data, "ini dataaaaaaaa");
        setOrder(data)
    }
    useEffect(() => {
        fetchOutlet()
    }, [])
    
    return (
        <>
            <DetailOrder order={order} fetchOutlet={fetchOutlet}/>
        </>
    )
}
