const UserDao = require('../daos/category_dao'); 
const userDao = UserDao

module.exports = {
  getAllUsers: async () => {
    return userDao.getAllUsers();
  },

  getUserById: async (id) => {
    return userDao.getUserById(id);
  },

  createUser: async (newUser) => {
    return userDao.createUser(newUser);
  },

  updateUser: async (id, updatedUser) => {
    return userDao.updateUser(id, updatedUser);
  },

  deleteUser: async (id) => {
    return userDao.deleteUser(id);
  }
};
