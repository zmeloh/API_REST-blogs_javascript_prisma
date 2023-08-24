const UserService = require('../services/user_service');  

const userService = UserService

module.exports = {
  getAll: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const user = await userService.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const newUser = req.body;
    try {
      const createdUser = await userService.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    try {
      const user = await userService.updateUser(id, updatedUser);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  remove: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await userService.removeUser(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
