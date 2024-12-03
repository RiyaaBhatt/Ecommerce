const express=require ("express");
const  AuthController  = require("../controllers/AuthController");

const router=express.Router()
router.get("/auth",AuthController.AuthController)
router.post("/signup",AuthController.Signup)
router.post("/login",AuthController.Login)
router.get("/cookie",AuthController.cookies)
router.get("/role/:username",AuthController.role)
router.get("/getalluser",AuthController.getAllUser)
router.get("/getUserById/:userId",AuthController.getUserById)
module.exports=router;