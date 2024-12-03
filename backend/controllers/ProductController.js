const db = require("../db");
const bcrypt = require("bcrypt");
const cp = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { log } = require("console");

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,
    exposedHeaders: ["X-Set-Cookie"]
}));

app.use(cp({ httpOnly: false, withCredentials: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "../../frontend/public/uploads");
        console.log('Saving to folder: ', uploadPath); 
        cb(null, uploadPath); 
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, "../../frontend/public/uploads")));

const AddProduct = async (req, res) => {
    try {
        upload.single("image")(req, res, async (err) => {
            if (err) {
                return res.status(400).send("File upload error");
            }

            const { productname, description, price, gender, category } = req.body;
            const image = req.file.filename;  

            const imageUrl = `http://localhost:5173/uploads/${image}`;

            await db.promise().query(
                "INSERT INTO product (productname, description, price, gender, category, image) VALUES (?, ?, ?, ?, ?, ?)",
                [productname, description, price, gender, category, imageUrl]
            );

            res.status(200).json({
                message: "Product added successfully",
                data: {
                    productname,
                    description,
                    price,
                    gender,
                    category,
                    imageUrl
                }
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

const getProducts = async (req, res) => {
    try {
        const [products] = await db.promise().query("SELECT * FROM product");

        const productsWithImageUrl = products.map(product => ({
            ...product,
            imageUrl: `http://localhost:5173/uploads/${path.basename(product.image)}`
        }));

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: productsWithImageUrl,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
};
const deleteProduct=async(req,res)=>{
    try{
        console.log("hi i am delete product");
        const id=req.params;
        console.log(id);
        console.log("hi i am delete product");
        await db.promise().query("delete from product where productId=?",[id.productId])
        console.log(req.params.productId);
        
        res.status(200).send("delete success")
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
    

    
}
const editProduct=async(req,res)=>{
    try{
        console.log("hi i am edit product");
        console.log(req.body);
        
        const { productname, description, price, gender, category } = req.body;
        const id=req.params.productId;
        console.log(id);
        console.log(productname)

        if(productname)
            console.log("hi rhis is productname")
{         await db.promise().query("update product set productname=? where productId=?  ",[productname,id])
console.log("updated");

}
        if(description){
            {         await db.promise().query("update product set description=? where productId=?  ",[description,id])}

        }    
        if(price)
        {
                     await db.promise().query("update product set price=? where productId=?  ",[price,id])

        }
        if(gender)
        {
            await db.promise().query("update product set gender=? where productId=?  ",[gender,id])

        }
        if(category)
        {
            await db.promise().query("update product set category=? where productId=?  ",[category,id])

        }
  
res.status(200).send()


        }


 
    catch(error)
    {
res.send(error)
    }
}
const getProductsById = async (req, res) => {
    try {
        const id=req.params.id
        console.log("hi i am fetch product By ");
        
        const [products] = await db.promise().query("SELECT * FROM product where productId=?",[id]);
console.log(products);

        const productsWithImageUrl = products.map(product => ({
            ...product,
            imageUrl: `http://localhost:5173/uploads/${path.basename(product.image)}`
        }));

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: productsWithImageUrl,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
};
module.exports = { AddProduct, getProducts,deleteProduct,editProduct,getProductsById};

