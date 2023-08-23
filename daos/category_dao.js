const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getAllCategories: async () => {
    return prisma.category.findMany();
  },

  getCategoryById: async (categoryId) => {
    return prisma.category.findUnique({
      where: { id: categoryId },
    });
  },

  createCategory: async (categoryData) => {
    return prisma.category.create({
      data: categoryData,
    });
  },

  updateCategory: async (categoryId, categoryData) => {
    return prisma.category.update({
      where: { id: categoryId },
      data: categoryData,
    });
  },

  deleteCategory: async (categoryId) => {
    return prisma.category.delete({
      where: { id: categoryId },
    });
  },
};
