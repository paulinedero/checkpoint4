const userRouter = require('express').Router();

const {
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller');

userRouter.get('/users/:userId', getOneUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:userId', updateUser);
userRouter.delete('/users/:userId', deleteUser);

module.exports = userRouter;
