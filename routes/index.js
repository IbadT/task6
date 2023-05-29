// const express = require('express');
// const router = express.Router();

// const postsRoutes = require('./postsRoutes.js');
// router.use('/posts', postsRoutes);

// module.exports = router;







const router = require('express').Router();

const todosRoutes = require('./todosRoutes.js');
router.use('/todos', todosRoutes);

const phoneRoutes = require('./phoneRoutes.js');
router.use('/phones', phoneRoutes);

const auth = require('./authorization.js');
router.use('/auth', auth);

module.exports = router;