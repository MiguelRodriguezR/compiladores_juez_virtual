const express = require('express');
const router = express.Router();
const cPlusPlusController = require('../controllers/cPlusPlusController')

router.post('/', cPlusPlusController.compileFile);

module.exports = router;