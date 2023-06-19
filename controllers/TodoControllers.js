const TodoServices = require('../services/TodoServices.js');

class TodoControllers {

    async getAllTodos() {
        const todos = await TodoServices.getAllTodos();
        return todos;
    };

    async createTodo(body) {
        const createdTodo = await TodoServices.createTodo(body);
        return createdTodo;
    };

    async updateTodo(id, body) {
        const updatedTodo = await TodoServices.updateTodo(id, body);
        return updatedTodo;
    };

    async deleteTodo(id) {
        const deleteResult = await TodoServices.deleteTodo(id);
        return deleteResult;
    };
    
};

module.exports = new TodoControllers();