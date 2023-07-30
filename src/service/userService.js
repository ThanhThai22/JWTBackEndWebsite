import mysql from "mysql2";
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

import bcrypt, { hash } from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPassword = hashUserPassword(password);

    // insert into users("email", "password", "username") values(email, password, username)
    connection.query('insert into users (email,password,username) values(?, ?, ?)', [email, hashPassword, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        });
}

const getUserList = () => {
    let users = [];
    connection.query('select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log(">>Check Results", results);
        });
}

module.exports = {
    createNewUser,
    getUserList
}