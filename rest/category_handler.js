const CategoryService = require('../services/category_service'); 

const categoryService = CategoryService

module.exports = {
  getAll: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const category = await categoryService.getCategoryById(id);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const newCategory = req.body;
    try {
      const createdCategory = await categoryService.createCategory(newCategory);
      res.status(201).json(createdCategory);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCategory = req.body;
    try {
      const category = await categoryService.updateCategory(id, updatedCategory);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  remove: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await categoryService.removeCategory(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
