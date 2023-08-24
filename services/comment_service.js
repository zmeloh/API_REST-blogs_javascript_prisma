const CommentController = require('../controllers/comment_controller');

module.exports = {
  getAllComments: CommentController.getAllComments,
  getCommentById: CommentController.getCommentById,
  createComment: CommentController.createComment,
  updateComment: CommentController.updateComment,
  deleteComment: CommentController.deleteComment,
};
