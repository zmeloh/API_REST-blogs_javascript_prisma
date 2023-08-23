const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getAllTags: async () => {
    return prisma.tag.findMany();
  },

  getTagById: async (tagId) => {
    return prisma.tag.findUnique({
      where: { id: tagId },
    });
  },

  createTag: async (tagData) => {
    return prisma.tag.create({
      data: tagData,
    });
  },

  updateTag: async (tagId, tagData) => {
    return prisma.tag.update({
      where: { id: tagId },
      data: tagData,
    });
  },

  deleteTag: async (tagId) => {
    return prisma.tag.delete({
      where: { id: tagId },
    });
  },
};
