import { userModel } from "./user-model.js";


export  class userController{

signup(req,res){
   const user =  userModel.signup(req.body);
   return res.status(201).send(user);


}

signin(req,res){
     const{email,password} = req.body;
      const user = userModel.signin(email,password);
     if(!user){
        return res.status(400).send("Invalid Credentials")

     }
     else{
        return res.status(201).send("Login Successfully")
     }

}




}