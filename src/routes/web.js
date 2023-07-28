import express from "express";
import HomeController from "../controller/HomeController";
const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
    router.get('/', HomeController.handleHelloWorld)

    router.get('/about', HomeController.handleAboutMe)

    router.get('/user', HomeController.handleUserPage)

    return app.use("/", router);
}

export default initWebRoutes;