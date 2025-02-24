import express from "express";
const router = express.Router();

import {
getAllCategories
} from "../controllers/settingController.js"



router.get("/", getAllCategories);



export default router;