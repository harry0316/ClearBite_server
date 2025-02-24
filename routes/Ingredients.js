import express from "express";
const router = express.Router();
import { getIngredients } from "../controllers/IngredientsController.js";


router.get("/",getIngredients);



export default router;