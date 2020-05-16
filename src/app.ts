import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';

import indexRouter from './routes/index';
import { sequelize } from './data/models/index';
import cors from 'cors';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { load } from 'yamljs';
import path from 'path';

const app = express();

dotenv.config();

// const execSync = require('child_process').execSync;
// const output = execSync('npx sequelize-cli db:migrate', { encoding: 'utf-8' }); // the default is 'buffer'
// console.log('Output was:\n', output);
sequelize.sync();

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(load(path.resolve('./api-docs.yml')))
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send(err);
});

export default app;
