const express = require("express");
const router = express.Router();
const exec = require("child_process").exec;
const testController = require('../controllers/testController')

router.get("/", testController.compileFile);

module.exports = router;
