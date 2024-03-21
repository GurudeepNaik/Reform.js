import express,{Request,Response} from "express"
const app = express();

app.get("/",(req:Request,res:Response)=>{
return res.status(200).json({
    status:true,
    message:"Hello World!"
})
})
app.listen(8080,()=>console.log("Server listining @http://localhost:8080"))