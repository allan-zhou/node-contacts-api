import express from 'express';
import bodyParser from 'body-parser';
import db from '../database/db';
import router from './route/Index';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router(app);

export default app;
