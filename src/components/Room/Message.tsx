import React from 'react'
import { Avatar, Typography } from 'antd'
import classes from './Message.module.scss'

type Message = {
    text: string
    displayName: string
    createdAt: number
    photoUrl: string | null
}

function Message({ text, displayName, createdAt, photoUrl }: Message) {
    return (
        <div className={classes.wrapper}>
            <div>
                <Avatar size={15} src={photoUrl}>
                    A
                </Avatar>
                <Typography.Text className={classes.displayName}>
                    {displayName}
                </Typography.Text>
                <Typography.Text className={classes.createAt}>
                    {createdAt}
                </Typography.Text>
            </div>
            <div>
                <Typography.Text className={classes.content}>
                    {text}
                </Typography.Text>
            </div>
        </div>
    )
}

export default Message
