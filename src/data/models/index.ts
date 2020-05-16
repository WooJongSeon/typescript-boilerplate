import { Sequelize } from 'sequelize';
import { dbConfig as config } from '../../config/appconfig';
import User from './user';
export const sequelize = new Sequelize(config.database, config.username, config.password, config);

export const db = {
  sequelize,
  Sequelize,
  User: User(sequelize),
};
