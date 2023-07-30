import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser';

//khai bao
const app = express();

//config view
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config route
initWebRoutes(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(">> JWT BackEnd is running on the port = ", PORT);
})