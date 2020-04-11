var peer = new Peer({
    host: location.hostname,
    port: location.port || (location.protocol === 'https:' ? 443 : 80),
    path: '/peerjs'
})

var conn = peer.connect(destId)
conn.send('hello')

conn.on('data', function(data) {
    // data === 'hello'
})