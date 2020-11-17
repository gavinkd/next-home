import React from 'react'
import {Col, Row} from "antd";
import styles from './index.module.css'

function TabBar () {
  return (
    <Row>
      <Col xs={24} sm={24} lg={0} xl={0}  md={0} className={styles.tabBar}>
        <div>TabBar</div>
      </Col>
    </Row>
  )
}

export default TabBar
