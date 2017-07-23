import UserRoute from './UserRoute';
import DepartmentRoute from './DepartmentRoute';

export default (app) => {
  app.use('/contacts/users', UserRoute);
  app.use('/contacts/departments', DepartmentRoute);
};
