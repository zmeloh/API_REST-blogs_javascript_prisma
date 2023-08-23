const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getAllPosts: async () => {
    return prisma.post.findMany();
  },

  getPostById: async (postId) => {
    return prisma.post.findUnique({
      where: { id: postId },
    });
  },

  createPost: async (postData) => {
    return prisma.post.create({
      data: postData,
    });
  },

  updatePost: async (postId, postData) => {
    return prisma.post.update({
      where: { id: postId },
      data: postData,
    });
  },

  deletePost: async (postId) => {
    return prisma.post.delete({
      where: { id: postId },
    });
  },
};
