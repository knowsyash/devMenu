import express from 'express'
 import { addFood, listfood } from '../controllers/foodControllers.js'
import multer from 'multer' //image store system

const foodRouter = express.Router();

//Image Storage System


const Storage = multer.diskStorage({
    destination :"uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
    })
const uploads = multer({storage:Storage })
foodRouter.post("/add",uploads.single("image"),addFood)
foodRouter.get("/list",listfood)
export default foodRouter