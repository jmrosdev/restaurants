import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

import Loading from '../../components/Loading'

export default function Account() {

    const auth = getAuth()    
    const [login, setLogin] = useState(null)
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    if (login === null) return <Loading isVisible={true} text="Cargando"/>


    return login ? <UserLogged/> : <UserGuest />
}