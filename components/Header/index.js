import React from 'react'
import { Row,Col } from 'antd'
import styles from "./index.module.css"

function Header () {
  return (
    <Row className={styles.header}>
      <Col className={styles.item} xs={0} sm={0} md={2} lg={4} xl={4}>
        Col
      </Col>
      <Col className={styles.item} style={{backgroundColor: "red"}} xs={24} sm={24} md={20} lg={16} xl={16}>
        header
      </Col>
      <Col className={styles.item} xs={0} sm={0} md={2} lg={4} xl={4}>
        Col
      </Col>
    </Row>
  )
}

export default Header
