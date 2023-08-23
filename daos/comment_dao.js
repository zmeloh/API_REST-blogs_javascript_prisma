const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getAllComments: async () => {
    return prisma.comment.findMany();
  },

  getCommentById: async (commentId) => {
    return prisma.comment.findUnique({
      where: { id: commentId },
    });
  },

  createComment: async (commentData) => {
    return prisma.comment.create({
      data: commentData,
    });
  },

  updateComment: async (commentId, commentData) => {
    return prisma.comment.update({
      where: { id: commentId },
      data: commentData,
    });
  },

  deleteComment: async (commentId) => {
    return prisma.comment.delete({
      where: { id: commentId },
    });
  },
};
