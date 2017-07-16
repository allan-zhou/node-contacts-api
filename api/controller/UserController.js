import UserModel from '../model/UserModel';

class UserController {
  constructor() {
    // this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res, next) {
    const allUsers = await UserModel.find();

    res.send({
      status: 1,
      data: allUsers,
    });
  }

  async getByName(req, res, next) {
    const user = await UserModel.findOne({
      name: 'zhoujl',
    });

    res.send({
      status: 1,
      data: user,
    });
  }
}

export default new UserController();
