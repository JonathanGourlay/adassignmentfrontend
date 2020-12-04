import React, { useState } from "react";
import { createContainer } from "unstated-next";
import apiClient from "./app/client";
import { GetUserIdToken } from '../utils/firebase';
import "firebase/auth";

function AuthedState() {
    const [token, setToken] = React.useState<string | undefined>();
    const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
    const [basketModalVisible, setBasketModalVisible] = React.useState<boolean>()
    
    const tryGetToken = () => {
        GetUserIdToken().then(res => setToken(res)).catch((err) => {console.log({err})})
    }

    React.useEffect(() => {
        tryGetToken()
    }) // run each time, as passed no deps

    React.useEffect(() => {
        if (token !== undefined) {
            apiClient.isAdmin(token).then((response) => {
            setIsAdmin(response)
        })
    }
    }, [token]) // run when token changes

    return { token, setToken, isAdmin, setIsAdmin, tryGetToken, basketModalVisible, setBasketModalVisible }

  }


const IsAuthed = createContainer(AuthedState);
export default IsAuthed;
