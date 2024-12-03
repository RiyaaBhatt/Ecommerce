const expres=require("express")
const db=require("../db");
 const OrderController=(req,res)=>{
    res.status(200).send("sent success")
}
const AddOrder = async (req, res) => {
    try {
         const { userId, productId, payment_method ,Address,phone_number,Name} = req.body;

         let today = new Date();
today.setDate(today.getDate() + 3);
console.log(today);

            await db.promise().query(
                "INSERT INTO orders ( userId, productId, order_date, payment_method,delivery_date,status,Address,phone_number,Name ) VALUES (?, ?, ?, ?,?,?,?,?,?)",
                [ userId, productId, new Date(), payment_method,today,"ordered",Address,phone_number,Name ]
            );

            res.status(200).json({
                message: "order placed successfully",
                data: {
                    userId, productId, payment_method 
                }
            });
        }
     catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

const getAllOrder = async (req, res) => {
    try {
        const [orders] = await db.promise().query("SELECT * FROM orders");

       

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: orders,
        });
    } catch (error) {
        console.error("Failed to fetch orders", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};
const cancelOrder=async(req,res)=>{
    try{
        console.log("hi i am delete orders");
        const id=req.params;
        console.log(id);
        console.log("hi i am delete orders");
        await db.promise().query("delete from orders where orderId=?",[id.orderId])
        console.log(req.params.orderId);
        
        res.status(200).send("delete success")
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
    

    
}
const editOrder=async(req,res)=>{
    try{
        console.log("hi i am edit orders");
        console.log(req.body);
        
        const {status } = req.body;
        const id=req.params.orderId;
        console.log(id);
        
        if(status)
            console.log("hi rhis is status")
{         await db.promise().query("update orders set status=? where orderId=?  ",[status,id])
console.log("updated");

}

  
res.status(200).send()


        }


 
    catch(error)
    {
res.send(error)
    }
}
const getOrderByUsername = async (req, res) => {
    try {
        const userId = req.params.userId;
        const [orders] = await db.promise().query("SELECT * FROM orders where userId=?",[userId]);

       

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: orders,
        });
    } catch (error) {
        console.error("Failed to fetch orders", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};
module.exports = { 
    AddOrder, 
    getAllOrder,
    cancelOrder,
    editOrder,
    getOrderByUsername
  };
  