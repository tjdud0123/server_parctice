var express = require('express');
var router = express.Router();
let User = require('../models/user');

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

//1 단계
router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;
    User.push({
        id,
        name,
        password,
        email
    });
    res.status(200).send(User);
});

module.exports = router;