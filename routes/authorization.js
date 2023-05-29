require('dotenv').config();
const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers.js');




/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     description: Check token
 *     tags: [Authorization]
 *     requestBody:
 *       description: Input login and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:  
 *               login:
 *                 type: string
 *               password: 
 *                 type: string
 *     responses:
 *       '200':
 *          description: Seccess
 *       '401':
 *          description: Bad request
 */

router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        UserControllers.login(login, password).then(token => {
            if(token === null) res.json('invalid login');
            res.send(token);
        })
    } catch (error) {
        console.log(error);
    }
});


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Authorization]
 *     requestBody:
 *       description: input login and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: user created
 *       '401':
 *         description: user doesn't created
 */

router.post('/register', async (req, res) => {
    try {
        UserControllers.register(req.body).then(data => {
            if(data === null) res.json('This login is already used');
            res.send(data);
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;