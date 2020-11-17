import React  from "react";
import { Layout, Col, Row } from 'antd'
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Main from "../components/Main";
import TabBar from "../components/TabBar";

function Home() {
    return (
        <div>
            <Head>
                <title>Frank 的个人网站</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <Layout>
                <Header />
                <Main />
                <TabBar />
            </Layout>
        </div>
    )
}

export default Home
