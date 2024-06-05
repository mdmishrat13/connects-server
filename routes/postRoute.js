const express = require('express');
const { createPost, getPosts } = require('../controllers/posts');

const router = express.Router()

router.post('/create',createPost);
router.get('/posts',getPosts)


module.exports= router;