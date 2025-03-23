import express from "express";
import productRouter from "./feature/src/product/product-route.js";
import userRouter from  "./feature/src/user/user-route.js"





const server = express();
server.use(express.json()); 
server.use("/api/products",productRouter);
server.use("/api/user",userRouter)




server.listen(3200);
console.log("server is listening");
