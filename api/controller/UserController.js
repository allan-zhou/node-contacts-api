import UserModel from '../model/UserModel';

class UserController {
  constructor() {
    // this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res) {
    const allUsers = await UserModel.find();

    res.send({
      status: 1,
      data: allUsers,
    });
  }

  async getByName(req, res) {
    const user = await UserModel.findOne({
      name: 'zhoujl',
    });

    res.send({
      status: 1,
      data: user,
    });
  }

  async getUser(req, res) {
    const {
      userid,
      username,
    } = req.query;

    const user = await UserModel.findOne({
      id: 'zhoujl',
    });

    try {
      res.send({
        errcode: 0,
        errmsg: 'ok',
      });
    } catch (error) {
      res.send({
        errcode: 0,
        errmsg: user,
      });
    }
  }
}

export default new UserController();
