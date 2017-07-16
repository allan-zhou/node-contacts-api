const UserModel = require('../model/UserModel');

class UserController {
  getUsers(req, res) {
    UserModel.find({}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
}

export default UserController;
