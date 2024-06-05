const express = require('express');
const {
    createUser,
    getUser
} = require('./../controllers/users')

const router = express.Router()

router.post('/register',createUser);
router.get('/user/:id',getUser)


module.exports= router;