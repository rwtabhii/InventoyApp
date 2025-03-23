import express from "express";
import { userController } from "./user-controller.js";


const userRouter = express.Router();
const usercontroller = new userController();


userRouter.post("/",usercontroller.signup);
userRouter.get("/",usercontroller.signin);


export default userRouter;