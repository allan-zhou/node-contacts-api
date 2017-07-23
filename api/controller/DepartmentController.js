import DepartmentModel from '../model/DepartmentModel';
import ERRCODE from '../../config/errcode';

class DepartmentController {
  static async getDepartmentById(req, res) {
    try {
      const data = await DepartmentModel.find({
        id: req.params.departmentid,
      });
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: error,
      });
    }
  }

  static async listDepartments(req, res) {
    try {
      const data = await DepartmentModel.find({});
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.success,
        errmsg: error,
      });
    }
  }

  static async createDepartment(req, res) {
    const newObj = {
      id: req.body.id,
      name: req.body.name,
      parentid: req.body.parentid,
      order: req.body.order,
    };

    try {
      const data = await DepartmentModel.create(newObj);
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: error,
      });
    }
  }

  static async updateDepartmentById(req, res) {
    const newObj = {
      name: req.body.name,
      parentid: req.body.parentid,
      order: req.body.order,
    };

    try {
      const data = await DepartmentModel.update({
        id: req.params.departmentid,
      }, newObj);
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: error,
      });
    }
  }

  static async deleteDepartmentById(req, res) {
    try {
      const data = await DepartmentModel.deleteOne({
        id: req.params.departmentid,
      });
      res.send({
        errcode: ERRCODE.success,
        errmsg: 'ok',
        data,
      });
    } catch (error) {
      res.send({
        errcode: ERRCODE.failure,
        errmsg: error,
      });
    }
  }
}

export default DepartmentController;
