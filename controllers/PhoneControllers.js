const PhoneServices = require('../services/PhoneServices.js');

class PhoneControllers {
    async getAllPhones() {
        const phones = await PhoneServices.getAllPhones();
        return phones
    };

    async createPhone(body) {
        const createdPhone = await PhoneServices.createPhone(body);
        return createdPhone;
    };

    async updatePhone(id, body) {
        const updatedPhone = await PhoneServices.updatePhone(id, body);
        return updatedPhone;
    };

    async deletePhone(id) {
        const deleteResult = PhoneServices.deletePhone(id);
        return deleteResult
    };

};

module.exports = new PhoneControllers();