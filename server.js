import express from "express";
import productRouter from "./feature/src/product/product-route.js";
import userRouter from "./feature/src/user/user-route.js"
// import { basicAuth } from "./feature/src/middlware/basicauthentication.js";
import jwtAuth from "./feature/src/middlware/jwtAuthentication.js";




const server = express();
server.use(express.json());
server.use("/api/products", jwtAuth, productRouter);
server.use("/api/user", userRouter)




server.listen(3200);
console.log("server is listening");
