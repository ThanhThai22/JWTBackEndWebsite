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

    router.post('/users/create-user', HomeController.handleCreateNewUser)

    router.post('/delete-user/:id', HomeController.handleDeleteUser)

    router.post('/update-user/:id', HomeController.getUpdateUserPage)

    router.post('/users/update-user', HomeController.handleUpdateUser)

    return app.use("/", router);
}

export default initWebRoutes;