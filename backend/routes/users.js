const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Hello world');
    return res.status(200).send('hi');
})

module.exports = router;