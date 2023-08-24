const TagController = require('../controllers/tag_controller');

module.exports = {
  getAllTags: TagController.getAllTags,
  getTagById: TagController.getTagById,
  createTag: TagController.createTag,
  updateTag: TagController.updateTag,
  deleteTag: TagController.deleteTag,
};
