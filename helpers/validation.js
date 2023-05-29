const jwt = require('jsonwebtoken');

const validation = (req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        const token = authToken && authToken.split(' ')[1];
        if(token === null) res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) throw new Error('invalid token');
            req.user = user;
            next();
        })
    } catch (error) {
        res.sendStatus(403);
    }
};

module.exports = validation;