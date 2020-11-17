import React from 'react'
import {Col, Row} from "antd";
import styles from './index.module.css'

function Main () {
  return (
    <Row justify="center" className={styles.mainContainer}>
      <Col xs={24} sm={24} md={24} lg={0} xl={0}>
        <div className={styles.container}>24</div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={24} xl={24}>
        <div className={styles.container}>
          <Row gutter={{ xs: 8, sm: 16 }} className={styles.containerView}>
            <Col className={styles.containerItem} xs={0} sm={0} md={0} lg={4} xl={4}>
              <div>left</div>
            </Col>
            <Col className={styles.containerItem} xs={0} sm={0} md={0} lg={15} xl={15}>
              <div>center</div>
            </Col>
            <Col className={styles.containerItem} xs={0} sm={0} md={0} lg={5} xl={5}>
              <div>right</div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Main
