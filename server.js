import express from "express";
import productRouter from "./feature/src/product/product-route.js";
import userRouter from "./feature/src/user/user-route.js"
// import { basicAuth } from "./feature/src/middlware/basicauthentication.js";
import jwtAuth from "./feature/src/middlware/jwtAuthentication.js";
import swagger from "swagger-ui-express";
// import apidocs from "./ApiDocs/swagger.json" assert {type : "json"};   // if it doesnotwork do another one down below//
import fs from "fs";






const server = express();
// setting up CORS
// server.use((req,res,next)=>{
//     //1. for allowing resurces for domain//
//     res.header("Access-Control-Allow-Origin","http://localhost:5200");
//     // 2.res.header field authorization is not allowed by ACAO in priflight request 
//     res.header("Access-Control-Allow-Origin","content-type: Authorization");
//     // 3. now we are setting which method can client access
//     res.header("Access-Control-Allow-Origin","*");
//     // 4. error that this doesnot have a ok status setting the status 
//     if(req.method == "OPTIONS"){
//         return res.sendStatus(200);
//     }
// })

// USING CORS liberary
// setting up CORS
const corsOption = {
    origin: "http://localhost:5200",
    allowedHeaders: "*"
};
server.use(cors(corsOption));

server.use(express.json());
const apidocs = JSON.parse(fs.readFileSync("./ApiDocs/swagger3.0.json", "utf8"));
server.use("/api-docs", swagger.serve, swagger.setup(apidocs));
server.use("/api/products", jwtAuth, productRouter);
server.use("/api/user", userRouter);





server.listen(3200);
console.log("server is listening");
