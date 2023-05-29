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
 */

router.get('/', validation, async (req, res) => {
    try {
        PhoneControllers.getAllPhones().then(data => res.send(data));

        // Phones.findAll().then(data => res.send(data));
    } catch (error) {
        console.log(error);
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
 *         description: Bad request
 */ 

router.post('/createPhone', validation, async (req, res) => {
    try {
        PhoneControllers.createPhone(req.body).then(data => res.send(data));

        // Phones.create({ ...req.body }).then(data => res.send(data));
    } catch (error) {
        console.log(error);
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
 *          '200':
 *            description: Successfull response
 *          '400':
 *            description: phone is not defined
 */

router.put('/updatePhone/:id', validation, async (req, res) => {
    try {
        PhoneControllers.updatePhone(req.params.id, req.body).then(data => res.send(data));

        // const { id } = req.params;
        // Phones.update(req.body, { where: { id } })
        // Phones.findOne({ where: { id } }).then(data => res.send(data));
    } catch (error) {
        console.log(error);
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
        PhoneControllers.deletePhone(req.params.id)
            .then(result => result 
                ? res.send('Phone is deleted') 
                : res.send('Phone not deleted'))

        // const { id } = req.params;
        // Phones.destroy({ where: { id: id } });
        // // console.log(deletedPhone); // 1
        // res.send('Phone is deleted');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImliYWR0IiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTY4NTMxMjgzMn0.A7JLr_vsoeNsECO6T77hlZotEwZ4I4bRsoofbRu0mVU