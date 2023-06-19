const { Positions } = require('../models/_models.js');

class PositionServices {

    getAll() {
        return new Promise((res, req) => {
            Positions.findAll().then(data => res(data));
        });
    };

    create(body) {
        return new Promise((res, rej) => {
            Positions.create(body).then(data => res(data));
        });
    };

    update(id, body) {
        return new Promise(async (res, rej) => {
            await Positions.update(body, { where: { id } });
            await Positions.findOne({ where: { id } }).then(data => res(data));
        });
    };

    delete(id) {
        return new Promise((res, rej) => {
            Positions.destroy({ where: { id } }).then(result => res(result));
        });
    };

};

module.exports = new PositionServices();