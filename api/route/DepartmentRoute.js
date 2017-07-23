import express from 'express';
import Department from '../controller/DepartmentController';

const router = express.Router();


router.get('/', Department.listDepartments);
router.post('/', Department.createDepartment);
router.get('/:departmentid', Department.getDepartmentById);
router.put('/:departmentid', Department.updateDepartmentById);
router.delete('/:departmentid', Department.deleteDepartmentById);


export default router;
