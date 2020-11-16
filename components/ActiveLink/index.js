import React from 'react'
import { withRouter } from "next/router";

function ActiveLink ({ router, href, children }) {
    console.log(router)
    const style = {
        margin: 10,
        color: router.pathname === href ? "red" :"blue"
    }

    return <a href={href} onClick={() => router.push(href)} style={style}>{children}</a>
}

export default withRouter(ActiveLink)
