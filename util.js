const getBodyData = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })
            req.on('data', (chunk) => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = getBodyData