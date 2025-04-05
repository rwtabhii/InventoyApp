import fs from "fs";
import { json } from "stream/consumers";


// we are using the fs.promise to avoid the callback in the fs opetation we using async/await with try/catch
const fspromise = fs.promises;

async function log (logData){
    try{
        logData = `\n ${new Date().toString()} - ${logData}`;
        await fspromise.appendFile("log.txt",logData);
    }catch(err){
        console.log(err);

    }

}

const loggerMiddleware = async (req,res,next)=>{
    if(!req.url.includes("signin")){
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        await log(logData);
    }
     next();
};

export default loggerMiddleware;