const productModel=require("../model/product.model");


function getProducts(req,res)
{
    if(productModel.length===0)
    {
        return res.status(400).json({message:"Products Details not found"});
    }
    return res.status(200).json({productModel});

}


function getProductsById(req,res)
{

    const id=req.params.id;

    const searchProduct=productModel.find((data)=>data.id==id);
    if(!searchProduct)
    {
        return res.status(400).json({message:`Product with ${id}  not found`})
    }
    return res.status(200).json({searchProduct})
}


function addProducts(req,res)
{
    const { name,catagory,brand,shape,dimension,price,productImage,sealImage }=req.body;

    if((name=="") || (catagory=="") || (brand=="") || (shape=="") || (dimension=="") || (price=="") || 
    (productImage=="") || (sealImage==""))
    {
        return res.status(404).json({message:"Product Details are missing"});
    }
    const newProduct={
        id:Date.now(),
        name,
        catagory,
        brand,
        shape,
        dimension,
        price,
        productImage,
        sealImage
    }
    productModel.push(newProduct);
    return res.status(200).json({message:"Product Data added successfully"});
}

function updateProductbyId(req,res)
{
    const id=req.params.id;

    const searchProduct=productModel.find((data)=>data.id==id);
    if(!searchProduct)
    {
        return res.status(400).json({message:`Product with ${id}  not Found`})
    }
   const { name,catagory,brand,shape,dimension,price,productImage,sealImage }=req.body;
    
   searchProduct.name=name || searchProduct.name;
   searchProduct.catagory=catagory || searchProduct.catagory;
   searchProduct.brand=brand || searchProduct.brand;
   searchProduct.shape=shape || searchProduct.shape;
   searchProduct.dimension=dimension || searchProduct.dimension;
   searchProduct.price=price || searchProduct.price;
   searchProduct.productImage=productImage || searchProduct.productImage;
   searchProduct.sealImage=sealImage || searchProduct.sealImage;

   return res.status(201).json({message:`Product with ${id}  updated`,productModel})


}

function deleteProductbyId(req,res)
{
    const id=req.params.id;
    const index=productModel.findIndex((data)=>data.id==id);
    if(index==-1)
    {
        return res.status(404).json({message:`Product with ${id}  not found`})
    }

    productModel.splice(index,1);
    return res.status(200).json({message:`Product with ${id} deleted Successfully`});
}

module.exports={ getProducts,getProductsById,addProducts,updateProductbyId,deleteProductbyId }