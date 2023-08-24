const express = require('express');
const router = express.Router();

// Import des gestionnaires d'API
const userHandler = require('../rest/user_handle');
const tagHandler = require('../rest/tag_handler');
const commentHandler = require('../rest/comment_handler');
const postHandler = require('../rest/post_handler');
const categoryHandler = require('../rest/category_handler');

// Routes pour le modèle User
router.get('/users', userHandler.getAll);
router.get('/users/:id', userHandler.getById);
router.post('/users', userHandler.create);
router.put('/users/:id', userHandler.update);
router.delete('/users/:id', userHandler.remove);

// Routes pour le modèle Tag
router.get('/tags', tagHandler.getAll);
router.get('/tags/:id', tagHandler.getById);
router.post('/tags', tagHandler.create);
router.put('/tags/:id', tagHandler.update);
router.delete('/tags/:id', tagHandler.remove);

// Routes pour le modèle Comment
router.get('/comments', commentHandler.getAll);
router.get('/comments/:id', commentHandler.getById);
router.post('/comments', commentHandler.create);
router.put('/comments/:id', commentHandler.update);
router.delete('/comments/:id', commentHandler.remove);

// Routes pour le modèle Post
router.get('/posts', postHandler.getAll);
router.get('/posts/:id', postHandler.getById);
router.post('/posts', postHandler.create);
router.put('/posts/:id', postHandler.update);
router.delete('/posts/:id', postHandler.remove);

// Routes pour le modèle Category
router.get('/categories', categoryHandler.getAll);
router.get('/categories/:id', categoryHandler.getById);
router.post('/categories', categoryHandler.create);
router.put('/categories/:id', categoryHandler.update);
router.delete('/categories/:id', categoryHandler.remove);

module.exports = router;
