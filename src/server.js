import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
//khai bao

//view
configViewEngine(app);
//route
initWebRoutes(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(">> JWT BackEnd is running on the port = ", PORT);
})