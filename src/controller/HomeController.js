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

const handleUserPage = (req, res) => {
    //model => get data from database
    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewUser(email, password, username);

    userService.getUserList();
    return res.send("Handle create new user")
}

module.exports = {
    handleHelloWorld,
    handleAboutMe,
    handleUserPage,
    handleCreateNewUser
}