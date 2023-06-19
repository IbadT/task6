require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserServices = require('../services/UserServices.js');

class UserControllers {

    async login(login, password) {
        const findLogin = await UserServices.findUserByLogin(login);
        if( findLogin ) {
            const comparePass = await bcrypt.compare(password, findLogin.password);
            if( comparePass ) {
                const token = jwt.sign({ login, password }, process.env.ACCESS_TOKEN);
                return token;
            }else {
                return { message: 'invalid token'};
            };
        }else {
            return null;
        };
    };

    async register(body) {
        const { login, password} = body;
        const findUser = await UserServices.findUserByLogin(login);
        if( !findUser ) {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);
            const createdUser = await UserServices.createUser(body, hashPass);
            return createdUser;
        } return null;
    };

};

module.exports = new UserControllers();