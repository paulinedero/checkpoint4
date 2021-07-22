const userRouter = require('./modules/user/user.route');
const babyRouter = require('./modules/baby/baby.route');

module.exports = (app) => {
  app.use('/api', userRouter);
  app.use('/api', babyRouter);
};
