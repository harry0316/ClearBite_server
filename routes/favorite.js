import express from "express";
const router = express.Router();
import { addFavorite,getAllFav } from "../controllers/favoriteController.js";

router.get("/",getAllFav)
.post("/",addFavorite);



export default router;