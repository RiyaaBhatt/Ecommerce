
const express=require ("express");
const router=express.Router()
const ProductController=require("../controllers/ProductController")
router.post("/addProduct",ProductController.AddProduct)
router.get("/fetchproduct",ProductController.getProducts)
router.get("/fetchproduct/:id",ProductController.getProductsById)

router.delete("/deleteproduct/:productId",ProductController.deleteProduct)
router.post("/editproduct/:productId",ProductController.editProduct)

module.exports=router