import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is Service')
})

app.listen(port, () => {
    console.log(`application is listening on port ${port}...`)
})

