const babyRouter = require('express').Router();

const {
  getOneBaby,
  createBaby,
  updateBaby,
  deleteBaby,
  getHeights,
  createHeight,
  deleteHeight,
  getWeights,
  createWeight,
  deleteWeight,
} = require('./baby.controller');

babyRouter.get('/users/:userId/babies/:babyId', getOneBaby);
babyRouter.post('/users/:userId/babies', createBaby);
babyRouter.put('/users/:userId/babies/:babyId', updateBaby);
babyRouter.delete('/users/:userId/babies/:babyId', deleteBaby);
babyRouter.get('/users/:userId/babies/:babyId/heights', getHeights);
babyRouter.post('/users/:userId/babies/:babyId/heights', createHeight);
babyRouter.delete(
  '/users/:userId/babies/:babyId/heights/:recordId',
  deleteHeight
);
babyRouter.get('/users/:userId/babies/:babyId/weights', getWeights);
babyRouter.post('/users/:userId/babies/weights', createWeight);
babyRouter.delete(
  '/users/:userId/babies//:babyId/weights/:recordId',
  deleteWeight
);

module.exports = babyRouter;
