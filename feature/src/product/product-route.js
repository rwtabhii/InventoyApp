import express from "express";
import { productController } from "./product-controller.js";


const productRouter = express.Router();

const productcontroller = new productController();
productRouter.get("/filter",productcontroller.filterProduct);
productRouter.get("/",productcontroller.getAllProduct);
productRouter.get("/:id",productcontroller.getOneProduct);
productRouter.post("/",productcontroller.addProduct);









export default productRouter;
