const router = require('express').Router();
const UPControllers = require('../controllers/UPControllers.js');
const validation = require('../helpers/validation.js');
const db = require('../config/database.js');

/**
 * @swagger
 * /api/userPosition/{id}:
 *   get:
 *     summary: Get UserPosition by id
 *     description: Return UserPosition by id
 *     tags: [Postgres UserPosition]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id for userPosition
 *         type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.get('/:id', validation, async (req, res) => {
    try { 

        const { id } = req.params;
        UPControllers.getUPById(id).then(data => res.send(data));

    } catch (error) {
        res.json(error);
    };
});



/**
 * @swagger
 * /api/userPosition/:
 *   post:
 *     summary: Add userPosition
 *     tags: [Postgres UserPosition]
 *     description: Add userPosition
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               user_id:
 *                 type: number              
 *               position_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.post('/', validation, async (req, res) => {
    try {

        const { body } = req;
        UPControllers.addUP(body).then(data => res.send(data));

    } catch (error) {
        res.json(error);
    };
});



/**
 * @swagger
 * /api/userPosition/{id}:
 *   put:
 *     summary: Update UserPosition by id
 *     tags: [Postgres UserPosition]
 *     description: update user position
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id for user_id
 *     requestBody:
 *       required: true
 *       content:   
 *         application/json:
 *           schema: 
 *             properties:
 *               user_id:
 *                 type: number              
 *               position_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.put('/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        console.log(body);
        UPControllers.updateUPById(id, body).then(data => res.send(data));

    } catch (error) {
        res.json(error);
    };
});



/**
 * @swagger
 * /api/userPosition/{id}:
 *   delete:
 *     summary: Delete userPosition
 *     description: Delete
 *     tags: [Postgres UserPosition]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: id for delete userPosition
 *         type: string
 *     responses:
 *       '200':
 *         description: Seccess 
 *       '403':
 *         description: Forbidden
 */

router.delete('/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        UPControllers.deleteUPById(id).then(deleteResult => 
            deleteResult 
                ? res.send('User Position seccessfully deleted')
                : res.send('User Position don\'t deleted') 
        );
        const users = await UPControllers.findAllUP();
        if(users.length < 1) {
            db.query('ALTER SEQUENCE user_positions_id_seq RESTART WITH 1');
        };

    } catch (error) {
        res.json(error);
    };
});

module.exports = router;