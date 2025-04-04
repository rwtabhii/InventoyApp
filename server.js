import express from "express";
import productRouter from "./feature/src/product/product-route.js";
import userRouter from "./feature/src/user/user-route.js"
// import { basicAuth } from "./feature/src/middlware/basicauthentication.js";
import jwtAuth from "./feature/src/middlware/jwtAuthentication.js";
import swagger from "swagger-ui-express";
// import apidocs from "./ApiDocs/swagger.json" assert {type : "json"};   // if it doesnotwork do another one down below//
import fs from "fs";






const server = express();
server.use(express.json());
const apidocs = JSON.parse(fs.readFileSync("./ApiDocs/swagger3.0.json", "utf8"));
server.use("/api-docs",swagger.serve ,swagger.setup(apidocs));
server.use("/api/products", jwtAuth, productRouter);
server.use("/api/user", userRouter)





server.listen(3200);
console.log("server is listening");
