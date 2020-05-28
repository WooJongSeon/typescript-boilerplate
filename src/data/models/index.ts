import { Sequelize } from 'sequelize';
import { dbConfig as config, testDBConfig as test } from '../../config/appconfig';
import User from './user';


export const sequelize = process.env.NODE_ENV === 'test' ?
  new Sequelize(test.database, test.username, test.password, test)
  : new Sequelize(config.database, config.username, config.password, config);

export const db = {
  sequelize,
  Sequelize,
  User: User(sequelize),
};
