const { Users } = require('../models/_models.js');

class UserServices {
    async findUserByLogin(login) {
        return new Promise((res, rej) => {
            Users.findOne({ where: { login }}).then(data => res(data));
        })
    };

    async createUser(body, hashPass) {
        return new Promise((res, rej) => {
            Users.create({ ...body, password: hashPass }).then(data => res(data));
        })
    };
};

module.exports = new UserServices();