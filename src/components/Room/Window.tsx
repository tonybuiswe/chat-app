import React from 'react'
import { Row, Col, Button, Avatar, Tooltip, Form, Input } from 'antd'
import { SendOutlined, UserAddOutlined } from '@ant-design/icons'
import classes from './Window.module.scss'
import Message from './Message'

function Window() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.roomInfo}>
                    <p className={classes.title}>Room 1</p>
                    <span className={classes.description}>This is room 1</span>
                </div>
                <div className={classes.rightGroup}>
                    <Button type="text" icon={<UserAddOutlined />}>
                        Invite
                    </Button>
                    <Avatar.Group size="default" maxCount={3}>
                        <Tooltip title="A">
                            <Avatar>Hmmm</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.messageList}>
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />{' '}
                    <Message
                        text="Test"
                        displayName="Person 1"
                        createdAt={123}
                        photoUrl={null}
                    />
                </div>
                <Form className={classes.form}>
                    <Form.Item className={classes.input}>
                        <Input placeholder="Send Message to Room" />
                    </Form.Item>
                    <Button
                        ghost
                        icon={<SendOutlined className={classes.sendIcon} />}
                        size="small"
                    />
                </Form>
            </div>
        </div>
    )
}

export default Window

const a = `
<h1></h1>
`
