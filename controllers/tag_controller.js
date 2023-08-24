const TagDao = require('../daos/tag_dao'); 
const tagDao = TagDao

module.exports = {
  getAllTags: async () => {
    return tagDao.getAllTags();
  },

  getTagById: async (id) => {
    return tagDao.getTagById(id);
  },

  createTag: async (newTag) => {
    return tagDao.createTag(newTag);
  },

  updateTag: async (id, updatedTag) => {
    return tagDao.updateTag(id, updatedTag);
  },

  deleteTag: async (id) => {
    return tagDao.deleteTag(id);
  }
};
