const CategoryDao = require('../daos/category_dao'); 
const categoryDao = CategoryDao

module.exports = {
  getAllCategories: async () => {
    return categoryDao.getAllCategories();
  },

  getCategoryById: async (id) => {
    return categoryDao.getCategoryById(id);
  },

  createCategory: async (newCategory) => {
    return categoryDao.createCategory(newCategory);
  },

  updateCategory: async (id, updatedCategory) => {
    return categoryDao.updateCategory(id, updatedCategory);
  },

  deleteCategory: async (id) => {
    return categoryDao.deleteCategory(id);
  }
};
