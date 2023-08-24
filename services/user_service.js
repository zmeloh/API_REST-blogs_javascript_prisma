const UserController = require('../controllers/user_controller');

module.exports = {
  getAllUsers: UserController.getAllUsers,
  getUserById: UserController.getUserById,
  createUser: UserController.createUser,
  updateUser: UserController.updateUser,
  deleteUser: UserController.deleteUser,
  getUserByUsername: UserController.getUserByUsername,
};
