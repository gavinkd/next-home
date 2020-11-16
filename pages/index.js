import React, { useEffect } from "react";
import { Button,Layout } from 'antd'
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicActiveLink = dynamic(import("../components/ActiveLink"), {
    loading: () => <p>加载中</p>
})

function Home({stars}) {
    const [count, setCount] = React.useState(1)
    const router = useRouter()
    useEffect(() => {
        const handleRouteChangeError = (err, url) => {
            if (err.cancelled) {
                console.log(`Route to ${url} was cancelled!`)
            }
        }

        router.events.on("routeChangeStart", (url) => {
            console.log("routerChangeStart", url)
        })

        router.events.on("routeChangeComplete", (url) => {
            console.log("routeChangeComplete", url)
        })

        router.events.on('routeChangeError', handleRouteChangeError)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeError', handleRouteChangeError)
        }
    }, [])


    return (
        <div>
            <Head>
                <title>Frank 的个人网站</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <Layout>
                <main>
                    <p>hello world {count}</p>
                    <Button onClick={() => setCount(count => ++count)} >订单</Button>
                    <h1>{stars}</h1>
                    <Link href={{ pathname: '/', query: { id: 10 } }} prefetch>
                        <img src="/lufei.jpg" alt="" width="200" height="200" />
                    </Link>
                    <Link href={{ pathname: '/blog', query: { id: 100} }} prefetch>
                        <img src="/lufei.jpg" alt="" width="200" height="200" />
                    </Link>
                    <Link href={{ pathname: '/life', query: { id: 100}}}  prefetch>
                        <img src="/lufei.jpg" alt="" width="200" height="200" />
                    </Link>
                    <Link href={{ pathname: '/about', query: { id: 100} }} prefetch>
                        <img src="/lufei.jpg" alt="" width="200" height="200" />
                    </Link>

                    <div>
                        <DynamicActiveLink href="/blog" router={router}><span>1312123</span></DynamicActiveLink>
                    </div>
                </main>
            </Layout>
            <style jsx>{`
                p {
                    color: red;
                }
            `}</style>
        </div>
    )
}

export async function getStaticProps (context) {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    // console.log(json)
    // return {
    //     props: {stars: json.stargazers_count}
    // }

    return {
        props: {
            stars: 1000
        }
    }
}

export default Home
