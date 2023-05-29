const { Todos } = require('../models/_models.js');

class TodoServices {
    async getAllTodos() {
        return new Promise((res, rej) => {
            Todos.findAll().then(data => res(data));
        })
    };

    async createTodo(body) {
        return new Promise((res, rej) => {
            Todos.create(body).then(data => res(data));
        })
    };

    async updateTodo(id, body) {
        return new Promise((res, rej) => {
            Todos.update(body, { where: { id } });
            Todos.findOne({ where: { id }}).then(data => res(data));
        })
    };

    async deleteTodo(id) {
        return new Promise((res, rej) => {
            Todos.destroy({ where: { id } }).then(result => res(result));
        })
    };

};

module.exports = new TodoServices();