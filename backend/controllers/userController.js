import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from  'bcrypt'
import validator from 'validator'

//login user

const loginUser = async (req,res)=>{
      const {email,password}=req.body;
      try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User Does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        {
            if(!isMatch)
            {
                    return res.json({success:false,message:"Invalid Credentials"})
            }
            const token = createToken(user._id)
            res.json({success:true,token})
        }} catch(error){
            console.log(error)
            res.json({success:false,message:"error in login"})     
        }
            
      
}
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const registerUser = async(req,res)=>{
    const {name,password,email}=req.body;
    try{ //checking is user already exist
        const exists = await userModel.findOne({email});
        if(exists)
        {         
            return res.json({success:false,message:"user already exist"})
        }
        //validating email& strong password
        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:" in validEmail"})
        }
        if(password.length<8)
        {
            return res.json({success:false, message:"please enter strong password"})
        }
        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPasword = await bcrypt.hash(password,salt);
        const newUser= new userModel({
            name:name,
            email:email,
            password:hashedPasword,
        })
           const user =await newUser.save()
            const token = createToken(user._id)
            res.json({success:true,token})
    }catch(error){
         console.log(error)
        res.json({success:false,message:"Error"})
    }

}
export {loginUser,registerUser}