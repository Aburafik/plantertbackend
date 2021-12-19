import mongoose from "mongoose"
const {Schema, model}= mongoose

const planetarySchema=Schema({
                    plantName:{
                      type:String,
                      required:true                  
                    },
                    plantImageUrl:{
                      type:String,
                       required:true                  
                                      
                    },
                    plantDescription:{
                       type:String,
                       required:true                  
                      },
                   plantAge:{
                        type:String,
                        required:true                  
                    },
                    plantLocation:{
                        type:String,
                        required:true                  
                     },
                     plantCondition:[{
                               water:String,
                               nutrient:String,
                               lightening:String,
                               
                               ph: String,
                               oxygen:String,
                               temperature: String
                              }],
                               
                               
                              knowyourPlant:[{
                                 plantingTime:String,
                                 germinationTime:String,
                                 transplantationTime:String,
                                 harvestTime:String,
                              
                                                  
                             }],
                               
                               
                               

                  //   knowyourPlant:[{
                                         
                  //   }]
})

const PlantModel= model("PlantsData",planetarySchema)

export default PlantModel