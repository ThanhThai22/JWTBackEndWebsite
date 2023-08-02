import mysql from "mysql2";
import userService from "../service/userService";

//create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const handleHelloWorld = (req, res) => {
    // return res.send("Hello World!");
    const name = "Thanh Thai";
    return res.render("home.ejs", { name });
}

const handleAboutMe = (req, res) => {
    return res.send("I'm Thanh Thai");
}

const handleUserPage = async (req, res) => {
    //model => get data from database
    let userList = await userService.getUserList();
    // console.log(">>Check user list", userList);
    return res.render("user.ejs", { userList });
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);

    return res.redirect("/user");
}

const handleDeleteUser = async (req, res) => {
    // console.log(">>check id:", req.params.id);
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userdata = {};

    if (user && user.length > 0) {
        userdata = user[0];
    }
    return res.render("user-update.ejs", { userdata });
}

const handleUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;
    await userService.updateUserInfor(email, username, id);
    return res.redirect("/user");
}


module.exports = {
    handleHelloWorld,
    handleAboutMe,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser
}