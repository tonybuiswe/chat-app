import React from 'react'
import { Col, Row } from 'antd/es/grid'
import Sidebar from './Sidebar'
import Window from './Window'

function Index() {
    return (
        <Row>
            <Col span={6}>
                <Sidebar />
            </Col>
            <Col span={18}>
                <Window />
            </Col>
        </Row>
    )
}

export default Index
