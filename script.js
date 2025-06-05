const {spawn}=require('child_process')

const high=spawn('node',['aju.js',"ajsal","jaseel"])

high.stdout.on('data',(data)=>{
    console.log(`output:${data}`)
})

high.stderr.on('error',(err)=>{
    console.log(`error:${err}`)
})