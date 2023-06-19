const { Users } = require('../models/_models.js');

class UserServices {

    async findUserByLogin(login) {
        return new Promise(async (res, rej) => {
            Users.findOne({ where: { login }}).then(data => res(data));
            // const user = await Users.findOne({ where: { login } });
            // console.log('User-->', user.password);
            // res(user);
        });
    };

    // {
    //     id: 1,
    //     name: 'John',
    //     age: 12,
    //     login: 'ibadt',
    //     password: '12345678'
    // }

    async createUser(body, hashPass) {
        return new Promise((res, rej) => {
            Users.create({ ...body, password: hashPass }).then(data => res(data));
        });
    };
    
};

module.exports = new UserServices();