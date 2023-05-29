const router = require('express').Router();
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
 */

router.get('/', validation, async (req, res) => {
    try {

        const todos = await TodoControllers.getAllTodos();
        res.send(todos);

        // const posts = await database.query('SELECT * FROM posts');
        // res.send(posts.rows);

        // Todos.findAll().then(data => res.send(data));
    } catch (error) {
        console.log(error);
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

        const createdTodo = await TodoControllers.createTodo(req.body);
        res.send(createdTodo);
        
        // const { title, content, user_id } = req.body;
        // const createdPost = await database.query(
        //     'INSERT INTO posts (title, content, user_id) values($1, $2, $3) RETURNING *',
        // [title, content, user_id]);
        // res.send(createdPost);

        // Todos.create({ title, content, user_id }).then(data => res.send(data));
    } catch (error) {
        console.log(error);
    }
});



/**
 * @swagger
 * /api/todos/update/{id}:
 *  put:
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
 */

router.put('/update/:id', validation, async (req, res) => {
    try {

        const updatedTodo = await TodoControllers.updateTodo(req.params.id, req.body);
        res.send(updatedTodo);

        // Todos.update(req.body, { where: { id }}).findOne({ where: { id } }).then(data => res.send(data));

    } catch (error) {
        console.log(error);
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
 *         '200':
 *             description: Successfull response
 */

router.delete('/delete/:id', validation, async (req, res) => {
    try {

        const deleteResult = await TodoControllers.deleteTodo(req.params.id);
        if(deleteResult) {
            res.send('Todo is deleted');
        } else {
            res.send('Todo not deleted');
        };

        // Todos.destroy({ where: { id } }).then(data => res.send(data));

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;