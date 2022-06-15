const http = require('http')

const server = http.createServer((req, res) => {

    const books = [
        { id: 1, auhtor: 'Oybek', name: 'Shum bola', pages: 203, price: '250$' }
    ]

    if (req.method === 'GET' && req.url === '/books') {
        res.writeHead(200, { 'Content-Type': 'aplication/json charsetutf8' })

        const resp = {
            status: "OK",
            books
        }

        res.end(JSON.stringify(resp))
    }

})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`srever running on port ${PORT}`);
})