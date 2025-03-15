import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js" //just write here .js
import foodRouter from './Routes/foodRoute.js'
import path from "path";
const app = express()
const port = 4000

const __dirname = path.resolve();

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
app.use(cors())

connectDB();
app.get("/",(req,res)=>{
    res.send("Api Working")
})
app.use('/api/food',foodRouter)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
});


//mongodb+srv://codeknowsyash:EbeOIG0tACl66lcg@cluster0.qk32q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
