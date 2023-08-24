const CommentService = require('../services/comment_service'); 

const commentService = CommentService 

module.exports = {
  getAll: async (req, res) => {
    try {
      const comments = await commentService.getAllComments();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const comment = await commentService.getCommentById(id);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const newComment = req.body;
    try {
      const createdComment = await commentService.createComment(newComment);
      res.status(201).json(createdComment);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedComment = req.body;
    try {
      const comment = await commentService.updateComment(id, updatedComment);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  remove: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await commentService.removeComment(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
