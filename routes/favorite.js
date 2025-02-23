import express from "express";
const router = express.Router();
import { addFavorite } from "../controllers/favoriteController.js";

router.post("/",addFavorite);



export default router;