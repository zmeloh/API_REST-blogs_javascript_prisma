const PostService = require('../services/post_service');  

const postService = PostService

module.exports = {
  getAll: async (req, res) => {
    try {
      const posts = await postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const post = await postService.getPostById(id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const newPost = req.body;
    try {
      const createdPost = await postService.createPost(newPost);
      res.status(201).json(createdPost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPost = req.body;
    try {
      const post = await postService.updatePost(id, updatedPost);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  remove: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await postService.removePost(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
