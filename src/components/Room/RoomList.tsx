import React from 'react'
import { Collapse, Button } from 'antd'
import classes from './RoomList.module.scss'
import Link from 'antd/es/typography/Link'
import room from './index'
import { PlusSquareOutlined } from '@ant-design/icons'

function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <Collapse.Panel
                key="1"
                header="Room list"
                className={classes.panel}
            >
                <Link>Room 1</Link>
                <Link>Room 2</Link>
                <Link>Room 3</Link>
            </Collapse.Panel>
            <Button
                type="text"
                ghost
                className={classes.addRoomBtn}
                icon={<PlusSquareOutlined />}
            >
                Add room
            </Button>
        </Collapse>
    )
}

export default RoomList
