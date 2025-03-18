import ProductModel from "./product-model.js";
export class productController {
    getAllProduct(req, res) {
        const products = ProductModel.getAllProducts();
        return res.status(200).send(products);
    }
}