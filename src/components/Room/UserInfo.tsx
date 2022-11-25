import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import { Typography } from 'antd'
import classes from './UserInfo.module.scss'
import { Button } from 'antd/lib'

function UserInfo() {
    return (
        <div className={classes.wrapper}>
            <div>
                <Avatar src="" />
                <Typography.Text className={classes.username}>
                    ABC
                </Typography.Text>
            </div>
            <Button ghost> Log Out</Button>
        </div>
    )
}

export default UserInfo
