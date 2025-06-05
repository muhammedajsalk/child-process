const {fork}=require('child_process')

const child=fork('aju.js')


child.send({task:"started",data:[1,2,3]})


child.on('message',(msg)=>{
    console.log('parent recieved:',msg)
})

child.on('exit',(code)=>{
    console.log("child exited with code",code)
})