import UserRoute from './UserRoute';

export default (app) => {
  app.use('/user', UserRoute);
};
