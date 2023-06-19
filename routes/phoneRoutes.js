const express = require('express');
const router = express.Router();
const PhoneControllers = require('../controllers/PhoneControllers.js');
const validation = require('../helpers/validation.js');



/**
 * @swagger
 * /api/phones/:
 *   get:
 *     summary: Get all phone
 *     description: Return all phone from DB
 *     tags: [Postgres phones]
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
        
        PhoneControllers.getAllPhones().then(data => res.send(data));

        // Phones.findAll().then(data => res.send(data));
    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/phones/createPhone:
 *   post:
 *     summary: Create phone
 *     tags: [Postgres phones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             properties:
 *               number:
 *                 type: string
 *               model:
 *                 type: string
 *               user_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */ 

router.post('/createPhone', validation, async (req, res) => {
    try {

        const { body } = req;
        PhoneControllers.createPhone(body).then(data => res.send(data));

        // Phones.create(req.body).then(data => res.send(data));
    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/phones/updatePhone/{id}:
 *  put:
 *      summary: Edites phone with {id}
 *      tags: [Postgres phones]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a phone to update
 *          type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                number:
 *                  type: string
 *                model:
 *                  type: string
 *                user_id:
 *                  type: integer
 *      responses:
 *        '200':
 *          description: Successfull response
 *        '400':
 *          description: phone is not defined
 *        '403':
 *          description: Forbidden
 */

router.put('/updatePhone/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        PhoneControllers.updatePhone(id, body).then(data => res.send(data));

        // const { id } = req.params;
        // Phones.update(req.body, { where: { id } })
        // Phones.findOne({ where: { id } }).then(data => res.send(data));
    } catch (error) {
        res.json(error);
    }
});



/**
 * @swagger
 * /api/phones/deletePhone/{id}:
 *   delete:
 *     summary: Delete phone with {id}
 *     tags: [Postgres phones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of phone to delete
 *         type: string
 *     responses:
 *         '200':
 *             description: Successfull response
 */

router.delete('/deletePhone/:id', validation, async (req, res) => {
    try {

        const { id } = req.params;
        PhoneControllers.deletePhone(id)
            .then(result => result 
                ? res.send('Phone is deleted') 
                : res.send('Phone not deleted')
            );
        
        const phones = await PhoneControllers.getAllPhones();
        if(phones.length < 1) {
            db.query('ALTER SEQUENCE phones_id_seq RESTART WITH 1');
        };

        // const { id } = req.params;
        // Phones.destroy({ where: { id: id } });
        // // console.log(deletedPhone); // 1
        // res.send('Phone is deleted');
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImliYWR0IiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTY4NTMxMjgzMn0.A7JLr_vsoeNsECO6T77hlZotEwZ4I4bRsoofbRu0mVU