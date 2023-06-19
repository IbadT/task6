const UPServices = require('../services/UPServices.js');

class UPControllers {

    async findAllUP() {
        const userPositions = await UPServices.findAllUP();
        return userPositions;
    }

    async addUP(body) {
        const createdUP = await UPServices.addUP(body);
        return createdUP;
    };

    async getUPById(id) {
        const u_p = await UPServices.getUP(id);
        return u_p;
    };

    async updateUPById(id, body) {
        const updatedUP = await UPServices.updateUP(id, body);
        return updatedUP;
    };

    async deleteUPById(id) {
        const deleteResult = await UPServices.deleteUP(id);
        return deleteResult;
    };

};

module.exports = new UPControllers();