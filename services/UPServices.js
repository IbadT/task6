const { UserPositions } = require('../models/_models.js');

class UPServices {

    findAllUP() {
        return new Promise((res, rej) => {
            UserPositions.findAll().then(up => res(up));
        })
    }
    
    addUP(body) {
        return new Promise((res, rej) => {
            UserPositions.create(body).then(data => res(data));
        });
    };

    getUP(id) {
        return new Promise((res, rej) => {
            UserPositions.findOne({ where: { user_id: id } }).then(data => res(data));
            // SELECT * FROM user_positions WHERE user_id=$1 LIMIT = 1
        });
    };

    updateUP(id, body) {
        return new Promise(async (res, rej) => {
            await UserPositions.update(body, { where: { user_id: id }});
            // 'UPDATE "user_positions" SET "user_id"=$1,"position_id"=$2,"updatedAt"=$3 WHERE "user_id" = $4'
            await UserPositions.findOne({ where: { user_id: id }}).then(data => res(data));
        });
    };

    deleteUP(id) { // 11111111111111111111
        return new Promise((res, rej) => {
            // UserPositions.findOne({ where: { user_id: id }}).destroy().then(result => res(result));
            UserPositions.destroy({ where: { user_id: id } }).then(result => res(result));
        });
    };

};

module.exports = new UPServices();