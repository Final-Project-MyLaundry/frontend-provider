import * as SecureStore from 'expo-secure-store';
import { createContext, useEffect, useState } from 'react';

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    return result
}

export const LoginContext = createContext(null)

export function AuthComponent({ children }) {
    const [isLogin, setIsLogin] = useState("")

    useEffect(() => {
        
        getValueFor('access_token').then((data) => {
            setIsLogin(data)
        })
    }, [])

    return (
        <LoginContext.Provider value={{ isLogin, setIsLogin, URL: 'https://c0cd-182-253-59-95.ngrok-free.app' }}>
            {children}
        </LoginContext.Provider>
    )
}