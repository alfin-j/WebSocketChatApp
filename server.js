const WebSocket =require('ws')
const server =new WebSocket.Server({port:8080});

server.on('connection', (socket) =>{
    console.log('Client connected');

    socket.on('message',(message)=>{
        console.log(`Received:${message}`);

        server.clients.forEach((client)=>{
            if(client.readyState === WebSocket.OPEN){
                client.send(message.toString());//for frontend reciving with string
            }
        });
    });

    socket.on("close",()=>{
        console.log('A Client disconnected');   
    });
})

console.log("websocket running")