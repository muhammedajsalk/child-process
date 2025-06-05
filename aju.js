process.on('message',(msg)=>{
    console.log("child recieved",msg)
    const resuld=msg.data.map(n=>n*2)
    process.send({resuld})
})