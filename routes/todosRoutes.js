const router = require('express').Router();
const db = require('../config/database.js');
const TodoControllers = require('../controllers/TodoControllers.js');
const validation = require('../helpers/validation.js');



/**
 * @swagger
 * /api/todos/:
 *   get:
 *     summary: Get all todos
 *     description: Return all todos from DB
 *     tags: [Postgres todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccessfull response
 *       '403':
 *         description: Forbidden
 */

router.get('/', validation, async (req, res) => {
    try {

        const todos = await TodoControllers.getAllTodos();
        res.send(todos);

        // const todos = await db.query('SELECT * FROM todos');
        // res.send(todos.rows);

    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/todos/create:
 *   post:
 *     summary: Create todo
 *     tags: [Postgres todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             properties:
 *               title: 
 *                 type: string
 *               content:
 *                  type: string
 *               user_id:
 *                  type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Bad request
 */ 

router.post('/create', validation, async (req, res) => {
    try {

        const { body } = req.body;
        const createdTodo = await TodoControllers.createTodo(body);
        res.send(createdTodo);

        // const { title, content, user_id } = req.body
        // const createdTodo = await db.query(
        //     'INSERT INTO todos (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
        //     [title, content, user_id]
        // );
        // res.send(createdTodo);

    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/todos/update/{id}:
 *   put:
 *      summary: Edites todo with {id}
 *      tags: [Postgres todos]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a todo to update
 *          type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                title: 
 *                  type: string
 *                content:
 *                   type: string
 *                user_id:
 *                   type: integer
 *      responses:
 *          '200':
 *            description: Successfull response
 *          '400':
 *            description: Todo is not defined
 *          '403':
 *            description: Forbidden
 */

router.put('/update/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        console.log(id);
        const updatedTodo = await TodoControllers.updateTodo(id, body);
        res.send(updatedTodo);

        // const { id } = req.params;
        // const { title, content, user_id } = req.body;
        // const updatedTodo = await db.query(
        //     'UPDATE todos SET title=$1, content=$2, user_id=$3 WHERE todos.id=$4 RETURNING *',
        //     [title, content, user_id, id]
        // );
        // res.send(updatedTodo);

    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/todos/delete/{id}:
 *   delete:
 *     summary: Delete todos with {id}
 *     tags: [Postgres todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of todo to delete
 *         type: string
 *     responses:
 *       '200':
 *         description: Successfull response
 *       '403':
 *         description: Forbidden
 */

router.delete('/delete/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        TodoControllers.deleteTodo(id)
            .then(result => result 
                ? res.send('Phone is deleted')
                : res.send('Phone not deleted')
            );
        const todos = await TodoControllers.getAllTodos();
        if(todos.length < 1) {
            db.query('ALTER SEQUENCE todos_id_seq RESTART WITH 1');
        };

        // const { id } = req.params;
        // const deleteResult = db.query(
        //     'DELETE FROM todos WHERE todos.id=$1 LIMIT 1',
        //     [id]
        // );
        // res.send(deleteResult);

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;