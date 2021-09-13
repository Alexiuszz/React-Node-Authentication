import React, { useState, useContext, createContext, useEffect } from "react"
import axios from 'axios';

export const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState(null);
    const [tokenExpirationTime, setTokenExpirationTime] = useState();

    const setUserToken = (newToken, expirationTime) => {
        const expiration = expirationTime;

        setTokenExpirationTime(expiration);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                token: newToken,
                expirationTime: expiration.toISOString()
            })
        );

        setToken(newToken);
    }
    const login = (userData) => {
        console.log(userData);
        return axios({
            url: '/login',
            method: "post",
            data: userData
        })
            .then(res => {
                if (res.data.id !== null && res.data.id !== undefined) {
                    setUser(res.data);
                    setIsLoaded(true);
                    setUserToken(res.data.id + "@" + res.data.username, new Date(new Date().getTime() + 1000 * 60 * 60));
                } else {
                    alert("Username or Password incorrect!");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const signout = () => {
        setUser(null);
        setToken(null);
        setIsLoaded(false);
        setTokenExpirationTime(null);
        localStorage.removeItem('userData');
        console.log(user)
        axios.get('/signout');

    }

    useEffect(() => {       
            axios({
                method: "GET",
                url: "/getUser",
            }).then((res) => {
                if (res.data.id !== null && res.data.id !== undefined) {
                    console.log(res.data);
                    setUser(res.data);
                    setIsLoaded(true);
                    setUserToken(res.data.id + "@" + res.data.username, new Date(new Date().getTime() + 1000 * 60 * 60));
                } else {
                    setTokenExpirationTime(null);
                    localStorage.removeItem('userData');
                    setUser(null);
                    setIsLoaded(false);
                    setToken(null);
                }

            })
                .catch(function (error) {
                    console.log(error);
                });
        
    }, [])


    //hook to check if something is there in localStorage and logs user in accordingly
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) {
            setUserToken(storedData.token, new Date(storedData.expirationTime));
        }        
    }, []);

    //new useEffect hook to set the timer if the expiration time is in future otherwise we clear the timer here
    useEffect(() => {
        var logoutTimer;
        if (token && tokenExpirationTime) {
            const remainingTime = tokenExpirationTime.getTime() - new Date().getTime();
            logoutTimer = setTimeout(signout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    });




    return {
        user,
        login,
        token,
        isLoaded,
        setUserToken,
        signout
    };
}

