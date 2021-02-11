const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get('/', async (req,res) => {
    const response = await axios.get(`http://localhost:3000/problems`);
    res.send(response.data);
});

module.exports = router;