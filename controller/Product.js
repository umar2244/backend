
const Product = require("../model/Product");

exports.add = async (req, res, next) => {
  
  try {
    const product = {
        productName: req.body.productName,
        productDes: req.body.productDes,
        prices: req.body.prices,
        productImage: req.file.path
      };

      const newProduct = await Product.create(product);
      return res
        .status(200)
        .json({  newProduct, message: "success" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.get=async(req,res,next)=>{
    try {
        let product = await Product.find()
        return res.status(200).json({

            product

        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
          });
    }
}