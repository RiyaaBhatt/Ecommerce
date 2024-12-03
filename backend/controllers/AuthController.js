const db=require("../db")
const bcrpt=require("bcrypt")
const cp=require("cookie-parser")
const jwt=require("jsonwebtoken")
const cors=require("cors")
const express=require("express")
const app=express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    exposedHeaders: [
        "X-Set-Cookie",
         
    ]
}))
app.use(cp({httpOnly:false,withCredencial:true}))
const AuthController=(req,res)=>{

  
    res.send("i am auth controller")
    
}
const users=[]
const Signup=async(req,res)=>{
    try{
        console.log("hiii");
        console.log("username",req.body);
        
        const {username,password,email,phone_number,role}=req.body
        console.log(role);
        
        console.log(password)
        if(!username || !password || !email || !password){

            
            return res.status(400).json({message:"Please enter all the details"})
        }
        console.log("hiii i am below all the requirement");
console.log(username);

        const[rows]=await db.promise().query("select * from users where username=?",[username])
        
        console.log("hi i am below the query");
        
        if(rows.length>0){
            return res.status(500).json({message:"Username already exists"})
        }



    const salt=await bcrpt.genSalt()
    var hassedpassword=await bcrpt.hash(req.body.password,salt)
    console.log(salt)
    console.log(hassedpassword)
    console.log(phone_number,"phonr no i am");
    
    const result=await db.promise().query("insert into users (username,password,email,phone_number,role) values (?,?,?,?,?)",[username,hassedpassword,email,phone_number,role?role:'user'])
    const user={"username":username,"password":hassedpassword,email:email,phone_number:phone_number}
    const AccessToken=jwt.sign(user,"Asfdhugef hausdwh")
    console.log(AccessToken)
    users.push(user)
    res.cookie("AccessToken", AccessToken, {
        httpOnly: false,
        secure: false,
            
    });    
    
    res.status(200).send()}
    catch{
        res.status(500).send()
    }

}
const Login=async(req,res)=>{
    const {username,password}=req.body
    console.log(req.body.username)
    const [rows] = await db.promise().query("select * from users where username = ?",[username])
    console.log(rows)
    if(rows.length==0)
    {
     res.status(400).send("no user found")
    }
    else{
    try{
        if(await bcrpt.compare(password,rows[0].password)){
            const user={"username":username,"password":password}
            const AccessToken = jwt.sign(user,"Asfdhugef hausdwh");
            console.log(AccessToken);
            
            res.cookie("AccessToken", AccessToken, {
                withCredentials: true,
                httpOnly: false,
              });
            res.status(200).send("login success")
        }
        else{
            res.status(400).send("password incorrect")
        }

    }
    catch{
        res.status(500).send("Error during login");
    }}


}
const cookies=async(req,res)=>{
    const cookies=req.cookies
    console.log("hi,");
    
    res.send({token:"dsf/ asdfk amsdkf askdf kasd fja df sadf asdf asd"})
}

const role=async(req,res)=>{
    const username=req.params
    console.log(username);
    try{
    const [rows] = await db.promise().query("select role from users where username = ?",[username.username])
    console.log(rows);
    res.send(rows)
    }
    catch(err){
        console.log(err);
    }
 
    

}
const getAllUser=async(req,res)=>{
    try{
        const [rows]=await db.promise().query("select u.userId,u.username,u.email,u.phone_number,u.role,count(o.userId) as orderCount from users u  left join orders o on u.userId=o.userId group by u.userId")
        
        
        res.send(rows)
    }
    catch(err){
        console.log(err);
        
    }
}
const getUserById=async(req,res)=>{
    try{
        const userId=req.params
        const [rows]=await db.promise().query("select u.userId,u.username,u.email,u.phone_number,u.role,count(o.userId) as orderCount from users u  left join orders o on u.userId=o.userId where u.userId=?",[u.userId])
        res.send(rows)
    }
    catch(err){
        res.send(err)
    }
}

module.exports={AuthController,Signup,Login,cookies,role,getAllUser,getUserById}