
const express=require ("express");
const router=express.Router()
const OrderController=require("../controllers/Order")
router.post("/addorder",OrderController.AddOrder)
router.get("/fetchorder",OrderController.getAllOrder)
router.delete("/deleteorder/:orderId",OrderController.cancelOrder)
router.post("/editorder/:orderId",OrderController.editOrder)
router.get("/fetchproduct/:userId", OrderController.getOrderByUsername);

module.exports=router