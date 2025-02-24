import express from "express";
const router = express.Router();
import { getImg } from "../controllers/barcodeController.js";

router.get("/", getImg);


export default router;