import UserDAL from './DAL';
import { OK } from 'http-status-codes';
class UserService {
  static async findOne(id: string) {
    const options = { id }
    try {
      const data = await UserDAL.findOneByOptions(options);
      return { status: OK, data }
    } catch (error) {
      throw error;
    }
  }

  static async findAll() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async insertOne(payload: any) {
    try {
      await UserDAL.insertOne(payload);
    } catch (error) {
      throw error;
    }
  }

  static async insertMany(payload: Array<any>) {
    try {
      await UserDAL.insertMany(payload);
    } catch (error) {
      throw error;
    }
  }

  static async updateOne() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async updateMany() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async deleteMany() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async patchOne() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }

  static async patchMany() {
    const options: any = { hobby: null }
    try {
      await UserDAL.findManyByOptions(options);
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
