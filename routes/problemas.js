const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('<h1>TITULO GRANDE</h1>');
});

module.exports = router;