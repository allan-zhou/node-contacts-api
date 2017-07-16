import UserRoute from './UserRoute';

export default (app) => {
  app.use('/contacts/user', UserRoute);
};
