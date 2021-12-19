import mongoose from "mongoose"
import express from "express"
import dotenv from  "dotenv"
import cors from "cors"
import  PlantModel from "./planetarySchema/planetarySchema.js"

dotenv.config()
const port= 8080;
const app=express();
app.use(cors())

app.use(express.json())
const dbUrl= process.env.DB_URL
mongoose.connect(dbUrl,{
        useNewUrlParser:true,            
        useUnifiedTopology:true,
}).then(()=>{
console.log("Connected to Db successfully")
}).catch((error)=>{
console.log(`An errror occured @: ${error}`)
})

///root route
app.get("/",(req,res)=>{
res.send("Welcome to CitizenRaf Plantery API")
})

//Plantery API rout
 app.get("/plantsInfor",async(req,res)=>{
     const plants=await PlantModel.find({})
     
     if(plants){
   return  res.status(200).json({
      message:"All plants infor fetched from DB",
      data:plants

      
     })}else{
       return res.status(404).json({
         message:"failed to fetch plants infor from DB"
       })

     }           
 });

 ////post plants infor to Db

 app.post("/createNewPlantInfor",async(req,res)=>{
   const{ plantName, plantImageUrl,plantDescription,plantAge,plantLocation,plantCondition,knowyourPlant}=req.body
 const   createplantInfor= await PlantModel.create({
     plantName,
     plantDescription,
     plantImageUrl,
     plantAge,
     plantLocation,
     plantCondition,
     knowyourPlant
   })
   if(createplantInfor){
     return res.status(201).json({
       message:"New plant infor created successfully",
       data:createplantInfor
     })
   }else{
     return res.status(400).json({
      message:"New plant infor failed to create",
      data:createplantInfor
    })
   }
 })


app.listen(port,()=>{
  console.log("Servaer started runinf")
})