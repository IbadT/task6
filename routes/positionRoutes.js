const express = require('express');
const router = express.Router();
const PositionControllers = require('../controllers/PositionControllers.js');
const validation = require('../helpers/validation.js');


/**
 * @swagger
 * /api/position/:
 *   get:
 *     summary: Get all position
 *     tags: [Postgres Positions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccessfull responses
 *       '403':
 *         desciption: Forbidden
 */

router.get('/', validation, async (req, res) => {
    try {
        
        const positions = await PositionControllers.getAllPositions();
        // SELECT "id", "position_name", "createdAt", "updatedAt" FROM "positions" AS "position"
        res.send(positions);

    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/position/createPosition:
 *   post:
 *     summary: Create position
 *     tags: [Postgres Positions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               position_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.post('/createPosition', validation, async (req, res) => {
    try {

        const { body } = req;
        const createdPosition = await PositionControllers.createPosition(body);
        // INSERT INTO "positions" ("id","position_name","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3) RETURNING "id","position_name","createdAt","updatedAt"
        res.send(createdPosition);

    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/position/updatePosition/{id}:
 *   put:
 *     summary: Update position by id
 *     tags: [Postgres Positions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Set position by id
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               position_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Position is not defined
 *       '403':
 *         description: Forbidden
 */

router.put('/updatePosition/:id', validation, async (req, res) => {
    try {

        const { body } = req;
        const { id } = req.params;
        const updatedPosition = await PositionControllers.updatePosition(id, body);
        // UPDATE "positions" SET "position_name"=$1,"updatedAt"=$2 WHERE "id" = $3
        res.send(updatedPosition);

    } catch (error) {
        res.json(error);
    }
});


/**
 * @swagger
 * /api/position/deletePosition/{id}:
 *   delete:
 *     summary: Delete Position by id
 *     tags: [Postgres Positions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id for position delete
 *         type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.delete('/deletePosition/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        const deleteResult = await PositionControllers.deletePosition(id)
        // DELETE FROM "positions" WHERE "id" = '69'
        if(deleteResult) {
            res.send('Position is deleted');
        } else {
            res.send('Position not deleted');
        };

        const positions = await PositionControllers.getAllPositions();
        if(positions.length < 1) {
            db.query('ALTER SEQUENCE positions_id_seq RESTART WITH 1');
        };


    } catch (error) {
        res.json(error);
    }
});

module.exports = router;