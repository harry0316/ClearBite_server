import express from "express";
import cors from "cors";
const app = express();
import userRoute from "./routes/user.js";
import settingRoute from "./routes/setting.js";
import brandedFood from "./routes/brandedFood.js"

import "dotenv/config";
const { PORT } = process.env;


//accept all of port
app.use(cors());
app.use(express.json());

//setting route for users 
app.use("/api/users", userRoute);

//setting route for setting 
app.use("/api/setting", settingRoute);

app.use("/api/brandedfood",brandedFood);


app.listen(PORT,()=>{
console.log("confirm this server is working well", PORT);
 });