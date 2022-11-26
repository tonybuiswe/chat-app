import { useNavigate } from 'react-router-dom'
import { auth } from '../components/firebase/config'
import { createContext, FC, ReactElement, useEffect, useState } from 'react'
import { Spin } from 'antd'
import firebase from 'firebase/compat/app'
import User = firebase.User

export const UserContext = createContext<UserData>({})

type UserData = Partial<User>

export default function AuthProvider({ children }: { children: ReactElement }) {
    const navigate = useNavigate()
    const [user, setUser] = useState<UserData>({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setIsLoading(false)
            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({ displayName, email, uid, photoURL })
                navigate('/')
            } else {
                navigate('/login')
            }
        })

        return unsubscribed
    }, [navigate])

    return (
        <UserContext.Provider value={user}>
            {isLoading ? <Spin /> : children}
        </UserContext.Provider>
    )
}
