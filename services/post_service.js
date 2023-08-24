const PostController = require('../controllers/post_controller');

module.exports = {
  getAllPosts: PostController.getAllPosts,
  getPostById: PostController.getPostById,
  createPost: PostController.createPost,
  updatePost: PostController.updatePost,
  deletePost: PostController.deletePost,
};
