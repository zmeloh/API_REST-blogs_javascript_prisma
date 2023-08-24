const CategoryController = require('../controllers/category_controller');

module.exports = {
  getAllCategories: CategoryController.getAllCategories,
  getCategoryById: CategoryController.getCategoryById,
  createCategory: CategoryController.createCategory,
  updateCategory: CategoryController.updateCategory,
  deleteCategory: CategoryController.deleteCategory,
};
