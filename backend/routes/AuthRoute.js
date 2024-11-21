const express=require ("express");
const  AuthController  = require("../controllers/AuthController");

const router=express.Router()
router.get("/auth",AuthController.AuthController)
router.post("/signup",AuthController.Signup)
router.post("/login",AuthController.Login)
module.exports=router;