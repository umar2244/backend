
const Order = require("../model/order");

exports.post= async (req, res, next)=>{

    try {
        const  order ={
            quantity:req.body.quantity,
            productId:req.body.productId
        }
        const newOrder= await Order.create(order)
        return res
        .status(200)
        .json({ newOrder , message: "success" });
    } catch (error) {
        res.status(500).json({
            message: error.message,
          });
        
    }




}
