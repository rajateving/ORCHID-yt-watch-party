const express = require('express');
const socket = require('socket.io');
const cors=require('cors')
const app = express();
///ek number app hai mast app hai 
// app.use(express.static('public'));

//Run the server
const server = app.listen('4000',()=>{
    
    console.log('Server running at 4000');
});

app.use(cors())
// setup sockets
const io = socket(server,{
      cors: {
        origin: "https://https-orchid-uditi-das-onrender-com.onrender.com",
        methods: ["GET", "POST"],
      },
    });

io.on('connection',(socket)=>{
    console.log('Connected');
    socket.on('update', (data) => {
        console.log(data);
        socket.broadcast.emit('update', data);
    });
    socket.on('play',()=>{
        socket.broadcast.emit('play')
    })
    socket.on('pause',()=>{
        socket.broadcast.emit('pause')
    })
    socket.on('slider',(data)=>{
        socket.broadcast.emit('slider',data)
    })
});
