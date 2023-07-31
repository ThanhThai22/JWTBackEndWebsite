import mysql from "mysql2/promise";

import bluebird from 'bluebird';


import bcrypt, { hash } from 'bcryptjs';
import { reset } from "nodemon";
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

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    // connection.query('select * from users',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //             return users;
    //         }

    //         users = results;
    //         return users;
    //     });
    try {
        const [rows, fields] = await connection.execute('select * from users');
        return rows;
    } catch (error) {
        console.log(">>>>Check Error: ", error)
    }

}

module.exports = {
    createNewUser,
    getUserList
}