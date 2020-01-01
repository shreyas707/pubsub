const express = require('express')
const redis = require('redis')
const socket = require('socket.io')

const subscriber = redis.createClient();

const app = express()
const port = 3000

app.use(express.static('public'))

// running server
const server = app.listen(port, function () {
    console.log('listening to port', port)
})

// connect to sockets
const io = socket(server)

io.on('connection', function (socket) {
    console.log('made socket connection')
})

// subscribing to a channel
const channel = "publisher1"

subscriber.subscribe(channel, function () {
    console.log('subscribed to', channel)
})

subscriber.on(
    'message',
    (channel, message) => {

        // Handle notification event
        io.emit('notification', JSON.parse(message))

    })
