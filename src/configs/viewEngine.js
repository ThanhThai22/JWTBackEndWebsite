import express from "express";

/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public'));

    app.set("view engine", "ejs"); //su dung cong nghe gi de code html -> ejs
    app.set("views", "./src/views"); //su dung code ben trong file views
}

export default configViewEngine;