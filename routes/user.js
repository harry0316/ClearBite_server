import express from "express";
const router = express.Router();

import {
addNewUser,getAllUsers
} from "../controllers/userController.js"


router.post("/",addNewUser)
.get("/",getAllUsers);






export default router;