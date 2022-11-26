import React, { useEffect } from 'react'
import Avatar from 'antd/es/avatar/avatar'
import { Typography } from 'antd'
import classes from './UserInfo.module.scss'
import { Button } from 'antd/lib'
import { auth, db } from '../firebase/config'
import { doc, onSnapshot, collection, query, where } from 'firebase/firestore'

function SidebarHeader() {
    useEffect(() => {
        const q = query(collection(db, 'users'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users: any = []
            querySnapshot.forEach((doc) => {
                users.push(doc.data())
            })
            console.log(users)
        })

        return unsubscribe
    }, [])

    return (
        <div className={classes.wrapper}>
            <div>
                <Avatar src="" />
                <Typography.Text className={classes.username}>
                    ABC
                </Typography.Text>
            </div>
            <Button ghost onClick={() => auth.signOut()}>
                Log Out
            </Button>
        </div>
    )
}

export default SidebarHeader
