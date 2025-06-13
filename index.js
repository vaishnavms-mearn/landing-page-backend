require('dotenv').config()

const express =require('express')
const cors =require('cors')
const router =require('./Router/route')
const db=require('./DB/connection')

const pfServer=express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use('/uploads', express.static('uploads'));
pfServer.use(router)

const PORT= 5002 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log('Listening on port ' +PORT);
})

pfServer.get("/",(req,res)=>{
res.send('<h1>Backend is Working</h1>')
})