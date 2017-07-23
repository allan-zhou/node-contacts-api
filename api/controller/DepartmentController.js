import DepartmentModel from '../model/DepartmentModel';
import ERRCODE from '../../config/errcode';

class DepartmentController {
  constructor() {
    // this.getAll = this.getAll.bind(this);
  }

  async getDepartmentById(req, res) {
    const Department = await DepartmentModel.findOne({
      id: 'zhoujl',
    });

    try {
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: Department,
      });
    }
  }

  async listDepartments(req, res) {
    try {
      const Department = await DepartmentModel.find({});
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data: Department,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.success,
        errmsg: error,
      });
    }
  }

  async createDepartment(req, res) {
    const {
      id,
      name,
      parentid,
      order,
    } = req.body;

    const newObj = {
      id,
      name,
      parentid,
      order,
    };

    try {
      const Department = await DepartmentModel.create(newObj);
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data: Department,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: error,
      });
    }
  }

  async updateDepartmentById(req, res) {}

  async deleteDepartmentById(req, res) {}

  async batchDeleteDepartments(req, res) {}
}

export default new DepartmentController();
