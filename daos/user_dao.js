const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getAllUsers: async () => {
    return prisma.user.findMany();
  },

  getUserById: async (userId) => {
    return prisma.user.findUnique({
      where: { id: userId },
    });
  },

  createUser: async (userData) => {
    return prisma.user.create({
      data: userData,
    });
  },

  updateUser: async (userId, userData) => {
    return prisma.user.update({
      where: { id: userId },
      data: userData,
    });
  },

  deleteUser: async (userId) => {
    return prisma.user.delete({
      where: { id: userId },
    });
  },

  getUserByUsername: async (username) => {
    return prisma.user.findUnique({
      where: { username: username },
    });
  },
};
