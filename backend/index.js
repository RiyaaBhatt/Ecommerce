const db=require("./db")
const express=require("express")
const router = require("./routes/AuthRoute")
const app=express()
app.use(express.urlencoded({ extended: true }));

const bcrpt=require("bcrypt")
app.use(express.json())
const jwt=require("jsonwebtoken")
const cp=require("cookie-parser")
app.use(cp());
const cors=require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))


app.use("/auth",router)
app.listen(1234,()=>{
    console.log("server is running on port 1234")
})