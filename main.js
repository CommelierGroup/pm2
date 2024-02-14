import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Root')
})
app.get('/service', async (req, res) => {
    try {
        res.send(await fetch('http://localhost:3000').then(res => res.text()))
    } catch (err) {
        console.log(err)
        res.status(500).send({error: 'Unknown error'});
    }
});


app.listen(port, () => {
    console.log(`application is listening on port ${port}...`)
})
