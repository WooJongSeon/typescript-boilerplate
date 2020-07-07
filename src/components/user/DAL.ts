import { knex } from '../../config/database';

class UserDAL {
  static async insertOne(payload: any) {
    try {
      return await knex('user').insert(payload);
    } catch (error) {
      throw error;
    }
  }
  static async insertMany(payload: Array<any>) {
    try {
      return await knex('user').insert(payload);
    } catch (error) {
      throw error;
    }
  }
  static async findOneByOptions(options: any) {
    try {
      return await knex('user').where(options).first();
    } catch (error) {
      throw error;
    }
  }
  static async findManyByOptions(options: any) {
    try {
      return await knex('user').where(options);
    } catch (error) {
      throw error;
    }
  }
  static async updateOne(id: any, payload: any) {
    try {
      return await knex('user')
        .where('id', id)
        .update(payload);
    } catch (error) {
      throw error;
    }
  }
  static async updateMany(ids: any, payload: any) {
    try {
      return await knex('user')
        .whereIn('id', ids)
        .update(payload);
    } catch (error) {
      throw error;
    }
  }
  static async deleteOne(id: any) {
    try {
      return await knex('user').where('id', id).delete();
    } catch (error) {
      throw error;
    }
  }
  static async deleteMany(ids: any) {
    try {
      return await knex('user').whereIn('id', ids).delete();
    } catch (error) {
      throw error;
    }
  }
}
export default UserDAL;
