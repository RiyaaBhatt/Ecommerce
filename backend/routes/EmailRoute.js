
const express=require ("express");
const router=express.Router()
const emailController=require("../controllers/MailController")
router.post("/email",emailController.mailController)

module.exports=router