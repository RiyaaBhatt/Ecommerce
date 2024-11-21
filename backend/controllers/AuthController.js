const db=require("../db")
const bcrpt=require("bcrypt")
const cp=require("cookie-parser")
const jwt=require("jsonwebtoken")

const AuthController=(req,res)=>{

  
    res.send("i am auth controller")
    
}
const users=[]
const Signup=async(req,res)=>{
    try{
        console.log("hiii");
        console.log("username",req.body);
        
        const {username,password,email,phone_number}=req.body
        
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
    const result=await db.promise().query("insert into users (username,password,email,phone_number,role) values (?,?,?,?,?)",[username,hassedpassword,email,phone_number,'user'])
    const user={"username":username,"password":hassedpassword,email:email,phone_number:phone_number}
    const AccessToken=jwt.sign(user,"Asfdhugef hausdwh")
    console.log(AccessToken)
    users.push(user)
    res.cookie("AccessToken",AccessToken)
    res.status(200).send()}
    catch{
        res.status(500).send()
    }

}
const Login=async(req,res)=>{
    const {username,password}=req.body
    console.log(req.body.username)
    const [rows] = await db.promise().query("select * from users where username = ?",[username])
    // console.log(rows)
    if(rows.length==0)
    {
        res.send("no user found")
    }
    
    try{
        if(await bcrpt.compare(password,rows[0].password)){
            res.status(200).send("login success")
        }
        else{
            res.status(400).send("password incorrect")
        }

    }
    catch{
        res.status(500).send("Error during login");
    }


}
module.exports={AuthController,Signup,Login}