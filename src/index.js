//require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from "./app.js"
dotenv.config({
    path:'./.env'
})
const serverPort = process.env.PORT || 8080
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Some Error Happened in ./src/index.js before listening to app");
    })
    app.listen(serverPort,()=>{
        console.log({
            serverStatus:`🌐  Application is Running`,
            URL: `🔗 http://localhost:${process.env.PORT}`
        });
    })
    // const wss = new WebSocket({serverPort})
    // wss.on("connection",(ws)=>{
    //     ws.on("message",(data)=>{
    //         console.log("Data From User",data);
    //         ws.send("aagya bhai connection")
    //     })
    // })
})
.catch((error)=>{
    console.log("DB connection Failed from Index.js",error);
})
 