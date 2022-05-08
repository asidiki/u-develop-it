const express = require('express');
const router = express.Router();

router.use(require('./candidateRoute'));
router.use(require('./partyRoutes'));

module.exports = router;