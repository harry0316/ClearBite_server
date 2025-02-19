import express from "express";
const router = express.Router();
import {
searchFood
}from "../controllers/brandedFoodController.js"


router.get("/search",searchFood);



export default router;