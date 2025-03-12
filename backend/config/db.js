import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://codeknowsyash:EbeOIG0tACl66lcg@cluster0.qk32q.mongodb.net/food-del').then(()=>{
        console.log("DB Connected")
    })
}