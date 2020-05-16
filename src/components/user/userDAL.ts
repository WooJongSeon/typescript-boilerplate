import { db } from '../../data/models';
import { Transaction } from 'sequelize/types';

const User = db.User;
class UserDAL {
  public static async create(payload: any, t: Transaction) {
    let result;
    try {
      result = await User.create(payload, {
        transaction: t,
      });
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  public static async getList(offset: any, limit: any, ) {
    let result;

    try {
      result = await User.findAll({
        include: { all: true, nested: true },
        offset: parseInt(offset),
        limit: parseInt(limit),
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  public static async get(id: string) {
    let result;
    try {
      result = await User.findByPk(id, {
        include: { all: true, nested: true }
      });
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
}
export default UserDAL;
