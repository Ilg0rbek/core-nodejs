const http = require('http')
const getBodyData = require('./util')
const { v4 } = require('uuid')

const server = http.createServer(async (req, res) => {

    const books = [
        { id: 1, auhtor: 'Oybek', name: 'Shum bola', pages: 203, price: '250$' }
    ]

    //GET all books
    if (req.method === 'GET' && req.url === '/books') {
        res.writeHead(200, { 'Content-Type': 'aplication/json charset=utf8' })

        const resp = {
            status: "OK",
            books
        }

        res.end(JSON.stringify(resp))
    } else if (req.url === '/books' && req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'aplication/json charset=utf8' })
        const data = await getBodyData(req)
        const { auhtor, name, pages, price } = JSON.parse(data)
        const resp = {
            id: v4(),
            auhtor,
            name,
            pages,
            price
        }
        books.push(resp)
        const response = {
            status: "created",
            books
        }
        res.end(JSON.stringify(response))
    } else if (req.url.match(/\/books\/w+/) && req.method === 'GET') {
        const id = req.url.split('/')
        console.log(id);
    }

})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`srever running on port ${PORT}`);
})