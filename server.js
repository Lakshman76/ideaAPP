const express = require('express')
const serverConfig = require('./config/server.config.js')

const app = express()

app.listen(serverConfig.PORT,()=>{
    console.log(`server stated at port ${serverConfig.PORT}`);
})
