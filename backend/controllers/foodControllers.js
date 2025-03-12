//api to create new data in our database
import foodModel from "../models/foodModel.js";
import foodRouter from "../Routes/foodRoute.js";
import fs from 'fs'

//

const  addFood = async (req,res)=>{
let image_filename = `${req.file.filename}`
const food = new foodModel({
    name:req.body.name,
    description : req.body.description,
    price : req.body.price,
    categorey: req.body.categorey,
    image:image_filename
})
try{
    await food.save();
    res.json({success:true,message:"Food Added"})
}catch(error){
  console.log(error)
  res.json({success:false,message:"Error"})
}
}
// all food list response display
const listfood = async (req,res)=>{
    try{
    const food = await foodModel.find({});
    res.json({succes:true,data:food})  }
catch(error)
{
    console.log(error)
        res.json({success:false,message:"error"})
}}
// remove food data

export {addFood,listfood}