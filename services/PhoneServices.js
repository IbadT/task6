const { Phones } = require('../models/_models.js');

class PhoneServices {
    async getAllPhones() {
        return new Promise((res, rej) => {
            Phones.findAll().then(data => res(data));
        })
    };

    async createPhone(body) {
        return new Promise((res, rej) => {
            Phones.create(body).then(data => res(data));
        })
    };

    async updatePhone(id, body) {
        return new Promise((res, rej) => {
            Phones.update(body, { where: { id }});
            Phones.findOne({ where: { id }}).then(data => res(data));
        })
    };

    async deletePhone(id) {
        return new Promise((res, rej) => {
            Phones.destroy({ where: { id } }).then(result => res(result));
        })
    }
};

module.exports = new PhoneServices();