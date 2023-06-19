const PositionServices = require('../services/PositionServices.js');

class PositionControllers {

    async getAllPositions() {
        const positions = await PositionServices.getAll();
        return positions;
    };

    async createPosition(body) {
        const createdPosition = await PositionServices.create(body);
        return createdPosition;
    };

    async updatePosition(id, body) {
        const updatedPosition = await PositionServices.update(id, body);
        return updatedPosition;
    };

    async deletePosition(id) {
        const deleteResult = await PositionServices.delete(id);
        return deleteResult;
    };
    
};

module.exports = new PositionControllers();