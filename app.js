var express = require('express')
var app = express()
app.use(express.static(__dirname+ "/public"))
var http = require('http').Server(app)
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
});


io.on('connection', function(socket){
    //console.log('Jerome Has Connected');
    socket.on('chat', (message)=>{
        console.log('Message:' +message);
        io.emit('chat', message);
   });
});

http.listen(8080, function(){
    console.log('App Started')
})