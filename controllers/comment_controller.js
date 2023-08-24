const CommentDao = require('../daos/comment_dao'); 
const commentDao = CommentDao

module.exports = {
  getAllComments: async () => {
    return commentDao.getAllComments();
  },

  getCommentById: async (id) => {
    return commentDao.getCommentById(id);
  },

  createComment: async (newComment) => {
    return commentDao.createComment(newComment);
  },

  updateComment: async (id, updatedComment) => {
    return commentDao.updateComment(id, updatedComment);
  },

  deleteComment: async (id) => {
    return commentDao.deleteComment(id);
  }
};
