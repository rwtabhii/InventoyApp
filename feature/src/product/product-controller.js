import ProductModel from "./product-model.js";
export class productController {
    getAllProduct(req, res) {
        const products = ProductModel.getAllProducts();
        return res.status(200).send(products);
    }

    getOneProduct(req, res) {
        const id = req.params.id;
        const product =  ProductModel.oneProduct(id);
        if(!product){
            return res.status(404).send("Product is not found");
        }
        else{
            return res.status(200).send(product)
        }
    }

}