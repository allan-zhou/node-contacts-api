import express from 'express';
import db from '../database/db';
import router from './route/Index';

const app = express();

router(app);

export default app;
