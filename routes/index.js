const router = require('express').Router();

const todosRoutes = require('./todosRoutes.js');
router.use('/todos', todosRoutes);

const phoneRoutes = require('./phoneRoutes.js');
router.use('/phones', phoneRoutes);

const auth = require('./authorization.js');
router.use('/auth', auth);

const position = require('./positionRoutes.js');
router.use('/position', position);

const UPRoutes = require('./UPRoutes.js');
router.use('/userPosition', UPRoutes);

module.exports = router;