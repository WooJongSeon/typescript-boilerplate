import Knex from 'knex';
import { dbConfig } from '../config/appConfig';

export const knex = Knex({
  client: 'mysql',
  version: '8',
  connection: {
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
  },
});

export const sync = async () => {
  knex.schema
    .withSchema('public')
    .createTableIfNotExists('user', function (t) {
      t.increments('id').notNullable().primary();
      t.string('name');
      t.string('hobby');
    })
    .then((value) => {
      console.log('user table created');
    })
    .catch((error) => {
      throw error;
    });
};
