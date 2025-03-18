import express from "express";
import { productController } from "./product-controller.js";


const productRouter = express.Router();

const productcontroller = new productController();

productRouter.get("/",productcontroller.getAllProduct);
productRouter.get("/:id",productcontroller.getOneProduct);








export default productRouter;
