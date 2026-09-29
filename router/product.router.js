const express=require("express");
const router=express.Router();
const productController=require("../controller/product.controller");
router.get("/view",productController.getProducts);
router.post("/add",productController.addProducts);
router.get("/view/:id",productController.getProductsById);
router.put("/update/:id",productController.updateProductbyId);
router.delete("/delete/:id",productController.deleteProductbyId);

module.exports=router;

