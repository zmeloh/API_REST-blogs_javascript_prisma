const PostDao = require('../daos/post_dao'); 
const postDao = PostDao

module.exports = {
  getAllPosts: async () => {
    return postDao.getAllPosts();
  },

  getPostById: async (id) => {
    return postDao.getPostById(id);
  },

  createPost: async (newPost) => {
    return postDao.createPost(newPost);
  },

  updatePost: async (id, updatedPost) => {
    return postDao.updatePost(id, updatedPost);
  },

  deletePost: async (id) => {
    return postDao.deletePost(id);
  }
};
