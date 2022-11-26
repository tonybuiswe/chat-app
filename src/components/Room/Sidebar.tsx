import React from 'react'
import { Col, Row } from 'antd/es/grid'
import SidebarHeader from './SidebarHeader'
import RoomList from './RoomList'
import classes from './Sidebar.module.scss'

function Sidebar() {
    return (
        <div className={classes.wrapper}>
            <Row>
                <Col span={24}>
                    <SidebarHeader />
                </Col>
                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </div>
    )
}

export default Sidebar
