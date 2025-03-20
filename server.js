import express from "express";
import productRouter from "./feature/src/product/product-route.js";





const server = express();
server.use(express.json()); 
server.use("/api/products",productRouter);




server.listen(3200);
console.log("server is listening");
