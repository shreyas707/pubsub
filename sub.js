const express = require('express')
const redis = require('redis')

const subscriber = redis.createClient();

const app = express()

subscriber.on(
    'message', 
    (channel, message) => { 
        console.log(`data: ${message}`) 
    })

subscriber.subscribe("publisher1")

app.get('/', (req, res) => {
    res.send('Subscriber 1')
})

app.listen(3006,() => {
    console.log("server is listening to port 3006");
})