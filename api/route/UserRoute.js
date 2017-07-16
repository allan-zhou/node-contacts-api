import express from 'express';
import User from '../controller/UserController';

const router = express.Router();

router.get('/', User.getAll);
router.get('/:name', User.getByName);

export default router;
