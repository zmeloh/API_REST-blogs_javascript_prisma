// Fichier: tag_handler.js

const TagService = require('../services/tag_service');  

const tagService = TagService

module.exports = {
  getAll: async (req, res) => {
    try {
      const tags = await tagService.getAllTags();
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const tag = await tagService.getTagById(id);
      if (tag) {
        res.json(tag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const newTag = req.body;
    try {
      const createdTag = await tagService.createTag(newTag);
      res.status(201).json(createdTag);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTag = req.body;
    try {
      const tag = await tagService.updateTag(id, updatedTag);
      if (tag) {
        res.json(tag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  remove: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await tagService.removeTag(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
