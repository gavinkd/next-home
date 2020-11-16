const http = require("http")
const { parse } = require("url")
const path = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

app.percent().then(() => {
    http.createServer((req,res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/a') {
            app.render(req, res, '/b', query)
        } else if (pathname === '/b') {
            app.render(req, res, '/a', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen('3000', err => {
        if (err) throw err
        console.log('> Ready location:3000')
    })
})
