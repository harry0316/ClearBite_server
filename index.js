import express from "express";
import cors from "cors";
const app = express();
import userRoute from "./routes/user.js";
import settingRoute from "./routes/setting.js";
import brandedFood from "./routes/brandedFood.js"
import barcode from "./routes/barcode.js";
import Ingredients from "./routes/Ingredients.js"

import "dotenv/config";
const { PORT } = process.env;


//accept all of port
app.use(cors());
app.use(express.json());

//setting route for users 
app.use("/api/users", userRoute);

//setting route for setting 
app.use("/api/setting", settingRoute);

//setting route for food ingredients
app.use("/api/brandedfood",brandedFood);

//setting route for WEB API (fetching picture)
app.use("/api/barcode",barcode);

//setting route for ingredients
app.use("/api/ingredients",Ingredients)

app.listen(PORT,()=>{
console.log("confirm this server is working well", PORT);
 });